export const DefaultWeatherValues = {
    coord: {
        lon: 0,
        lat: 0,
    },
    main: {
        feels_like: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
    },
    weather: [
        {
            icon: "10d",
        },
    ],
    name: "",
};

export const DefaultLocationValues = {
    city: "",
};
export const DefaultForecastData = {
    location: {
        name: "",
        country: "",
    },
    current: {
        temp_c: 0,
        feelslike_c: 0,
        condition: {
            text: "",
            icon: "",
        },
        air_quality: {
            co: 0.0,
            no2: 0.0,
            o3: 0.0,
            so2: 0.0,
            "us-epa-index": 1,
        },
    },
    forecast: {
        forecastday: [
            {
                date: "",
                day: {
                    maxtemp_c: 0,
                    mintemp_c: 0,
                    avgtemp_c: 0,
                    condition: {
                        icon: "",
                        text: "",
                    },
                },
                astro: {
                    sunrise: "",
                    sunset: "",
                },
            },
            {
                date: "",
                day: {
                    maxtemp_c: 0,
                    mintemp_c: 0,
                    avgtemp_c: 0,
                    condition: {
                        icon: "",
                        text: "",
                    },
                },
                astro: {
                    sunrise: "",
                    sunset: "",
                },
            },
            {
                date: "",
                day: {
                    maxtemp_c: 0,
                    mintemp_c: 0,
                    avgtemp_c: 0,
                    condition: {
                        icon: "",
                        text: "",
                    },
                },
                astro: {
                    sunrise: "",
                    sunset: "",
                },
            },
        ],
    },
};
