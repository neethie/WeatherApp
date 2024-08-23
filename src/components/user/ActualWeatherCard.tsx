import { useEffect } from "react";
import { useStore } from "../../slices/useStore";

export default function ActualWeatherCard() {
    const { fetchLocation, location, forecast, fetchForecast } = useStore();
    useEffect(() => {
        fetchLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location.city) {
            fetchForecast(location);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return (
        <div className="md:grid md:grid-cols-[3fr_1fr] gap-x-3 flex flex-col">
            <div className="my-5 bg-white rounded-3xl p-10 shadow-md flex flex-col items-center md:flex-row md:items-end justify-between dark:bg-darkmode-darker">
                <div className="flex flex-col items-center md:items-start">
                    <img
                        src={forecast.current.condition.icon}
                        alt="weather"
                        className="w-16"
                    />
                    <p className="text-6xl row-start-2">
                        {forecast.current.temp_c}°
                    </p>
                </div>

                <div className="flex flex-col md:text-right text-center">
                    <p className="font-black uppercase text-2xl">
                        {forecast.location.name}
                    </p>
                    <p className="uppercase text-lg">
                        {forecast.location.country}
                    </p>
                </div>
            </div>
            <div className="my-5 rounded-3xl bg-jagger-400 p-5 shadow-lg text-gray-50 w-1/2 self-center md:w-full md:self-auto">
                <h3 className="text-center uppercase font-black my-2">HOY</h3>
                <div className="flex flex-row h-full justify-between relative">
                    <div className="flex flex-col hover:scale-105 transition-transform">
                        <p className="font-bold">
                            {forecast.forecast.forecastday[0].astro.sunrise}
                        </p>
                        <img
                            src="/icons/sunrise.svg"
                            alt="sunrise"
                            className="w-10 self-center"
                        />
                    </div>
                    <div className="flex flex-col justify-end self-center hover:scale-105 transition-transform">
                        <img
                            src="/icons/sunset.svg"
                            alt="sunset"
                            className="w-8 self-center"
                        />
                        <p className="font-bold text-right">
                            {forecast.forecast.forecastday[0].astro.sunset}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
