import WeatherCard from "./WeatherCard";

export default function Favorites() {
    return (
        <div className="mt-5 space-y-3">
            <p className="font-semibold text-xl">
                Checa tus ciudades{" "}
                <span className="text-jagger-500">favoritas</span>
            </p>

            <div className="w-full grid grid-cols-4 rounded-xl gap-x-5">
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </div>
        </div>
    );
}
