import axios from "axios";

import {
    ForecastCardAPIResponseSchema,
    LocationAPIResponseSchema,
} from "../schemas/weather-schema";
import { Location } from "../types";
//
export async function getLocation() {
    const url = `https://api.ipdata.co?api-key=${
        import.meta.env.API_KEY_LOCATION
    }`;
    const { data } = await axios(url);
    const result = LocationAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
}

// API DIARIA

export async function getForecastData(location: Location) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.API_KEY_FORECAST
    }&q=${location.city}&days=3&aqi=yes`;

    try {
        const { data } = await axios(url);
        const result = ForecastCardAPIResponseSchema.safeParse(data);

        if (result.success) return result.data;
        console.error("Error:", result.error);
    } catch (error) {
        console.log("error");
    }
}
