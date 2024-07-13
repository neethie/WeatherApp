import { useMemo } from "react";
import { DAYS, MONTHS } from "../../utils/date";

export default function Greetings() {
    const date = new Date();

    const infoDate = {
        hour: date.getHours(),
        day: date.getDay(),
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };

    const setGreeting = useMemo(() => {
        if (infoDate.hour < 12) return "Buenos días";
        else if (infoDate.hour > 12 && infoDate.hour < 19)
            return "Buenas tardes";
        else return "Buenas noches";
    }, [infoDate.hour]);

    return (
        <div>
            <h2 className="text-3xl font-black">
                {setGreeting}
                {", "}
                <span className="text-jagger-400">usuario</span>.
            </h2>
            <p className="text-lg text-gray-600">
                Hoy es {DAYS[infoDate.date]} {infoDate.date} de{" "}
                {MONTHS[infoDate.month]} del {infoDate.year}.
            </p>
        </div>
    );
}
