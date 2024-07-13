// TIPAMOS
import { z } from "zod";
import {
    ForecastCardAPIResponseSchema,
    LocationAPIResponseSchema,
    WeatherCardAPIResponseSchema,
} from "../schemas/weather-schema";

export type WeatherCard = z.infer<typeof WeatherCardAPIResponseSchema>;
export type Location = z.infer<typeof LocationAPIResponseSchema>;
export type Forecast = z.infer<typeof ForecastCardAPIResponseSchema>;
