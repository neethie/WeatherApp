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
        <div className="grid grid-cols-[3fr_1fr] gap-x-3">
            <div className="my-5 bg-white rounded-3xl p-10 shadow-md grid grid-cols-2 dark:bg-darkmode-darker">
                <img
                    src={forecast.current.condition.icon}
                    alt="weather"
                    className="w-16"
                />
                <p className="text-6xl row-start-2">
                    {forecast.current.temp_c}°
                </p>
                <div className="flex flex-col row-start-2 text-right">
                    <p className="font-black uppercase text-2xl">
                        {forecast.location.name}
                    </p>
                    <p className="uppercase text-lg">
                        {forecast.location.country}
                    </p>
                </div>
            </div>
            <div className="my-5 rounded-3xl bg-jagger-400 p-5 shadow-lg text-gray-50">
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
                    <img
                        src="/icons/ease.svg"
                        alt="ease"
                        className="absolute h-20 bottom-[75px] left-[75px]"
                    />
                </div>
            </div>
        </div>
    );
}
