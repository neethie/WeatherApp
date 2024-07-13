import Greetings from "../components/greetings/Greetings";
import SearchBar from "../components/main/SearchBar";
import Spinner from "../components/spinner/Spinner";
import ActualWeatherCard from "../components/user/ActualWeatherCard";
import AirQuality from "../components/user/air/AirQuality";
import DayInfo from "../components/user/Day/DayInfo";
import { useStore } from "../slices/useStore";

export default function Main() {
    const { forecastLoading } = useStore();
    return (
        <>
            <div className="grid grid-cols-[4fr_2fr] grid-rows-[1fr_auto] gap-x-7">
                <div className="flex justify-between items-center">
                    <Greetings />
                    <SearchBar />
                </div>
                <div className="row-start-2">
                    <div className="space-y-3 col-start-1">
                        <ActualWeatherCard />
                        <DayInfo />
                    </div>
                </div>
                <div className="row-start-2">
                    <AirQuality />
                </div>
            </div>
            {forecastLoading && <Spinner />}
        </>
    );
}
