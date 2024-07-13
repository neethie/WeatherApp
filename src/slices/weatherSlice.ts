import { StateCreator } from "zustand";
import { Forecast, Location } from "../types";
import { getForecastData, getLocation } from "../services/weatherService";
import {
    DefaultForecastData,
    DefaultLocationValues,
} from "../utils/defaultValues";

export type WeatherSliceType = {
    location: Location;
    forecast: Forecast;
    forecastLoading: boolean;
    fetchLocation: () => Promise<void>;
    fetchForecast: (location: Location) => Promise<void>;
};

export const weatherSlice: StateCreator<WeatherSliceType> = (set) => ({
    forecast: DefaultForecastData,
    location: DefaultLocationValues,
    forecastLoading: false,
    fetchLocation: async () => {
        const location = await getLocation();
        set({
            location,
            forecastLoading: true,
        });
    },
    fetchForecast: async (location) => {
        const forecast = await getForecastData(location);
        if (forecast) {
            set({
                forecast,
            });
        } else {
            set({
                forecast: DefaultForecastData,
            });
        }
        set({
            forecastLoading: false,
        });
    },
});
