import { useStore } from "../../../slices/useStore";
import { DAYS } from "../../../utils/date";

type DayCardProps = {
    index: number;
};

export default function DayCard({ index }: DayCardProps) {
    const { forecast } = useStore();
    const date = new Date(forecast.forecast.forecastday[index].date);
    const day = date.getDay();
    const info = forecast.forecast.forecastday[index];
    // <div className="border-2 p-5 border-jagger-300 hover:border-jagger-500 rounded-xl shadow grid grid-cols-[2fr_1fr] hover:scale-105 transition-transform">
    return (
        <div className=" p-5 bg-white shadow-md rounded-3xl grid grid-cols-[2fr_1fr] hover:scale-105 transition-transform dark:bg-darkmode-darker">
            <div className="">
                <p className="font-black uppercase">{DAYS[day]}</p>
                <p className="text-gray-500">{info.day.condition.text}</p>
            </div>
            <img
                src={info.day.condition.icon}
                alt={info.day.condition.text}
                className="justify-self-end items-start"
            />
            <p className="">
                Max: <span className="font-bold">{info.day.maxtemp_c}°</span>
            </p>
            <p className="">
                Min: <span className="font-bold">{info.day.mintemp_c}°</span>
            </p>
        </div>
    );
}
