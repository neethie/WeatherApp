import axios from "axios";

import {
    ForecastCardAPIResponseSchema,
    LocationAPIResponseSchema,
} from "../schemas/weather-schema";
import { Location } from "../types";
//
export async function getLocation() {
    const api = import.meta.env.VITE_API_KEY_LOCATION;

    console.log(import.meta.env);
    const url = `https://api.ipdata.co?api-key=${api}`;
    const { data } = await axios(url);
    const result = LocationAPIResponseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    }
}

// API DIARIA

export async function getForecastData(location: Location) {
    const api = import.meta.env.VITE_API_KEY_FORECAST;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${api}&q=${location.city}&days=3&aqi=yes`;

    try {
        const { data } = await axios(url);
        const result = ForecastCardAPIResponseSchema.safeParse(data);

        if (result.success) return result.data;
        console.error("Error:", result.error);
    } catch (error) {
        console.log("error");
    }
}
