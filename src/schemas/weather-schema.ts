//
// ESQUEMAS PARA TIPAR
//

import { z } from "zod";

// Respuesta API Localización
export const LocationAPIResponseSchema = z.object({
    city: z.string(),
});

// Respuesta API Clima local
export const WeatherCardAPIResponseSchema = z.object({
    coord: z.object({
        lon: z.number(),
        lat: z.number(),
    }),
    main: z.object({
        feels_like: z.number(),
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),
    }),
    weather: z.array(
        z.object({
            icon: z.string(),
        })
    ),
    name: z.string(),
});

export const ForecastCardAPIResponseSchema = z.object({
    location: z.object({
        name: z.string(),
        country: z.string(),
    }),
    current: z.object({
        temp_c: z.number(),
        feelslike_c: z.number(),
        condition: z.object({
            text: z.string(),
            icon: z.string(),
        }),
        air_quality: z.object({
            co: z.number(),
            no2: z.number(),
            o3: z.number(),
            so2: z.number(),
            "us-epa-index": z.number(),
        }),
    }),
    forecast: z.object({
        forecastday: z.array(
            z.object({
                date: z.string(),
                day: z.object({
                    maxtemp_c: z.number(),
                    mintemp_c: z.number(),
                    avgtemp_c: z.number(),
                    condition: z.object({
                        icon: z.string(),
                        text: z.string(),
                    }),
                }),
                astro: z.object({
                    sunrise: z.string(),
                    sunset: z.string(),
                }),
            })
        ),
    }),
});
