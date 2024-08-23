import DayCard from "./DayCard";

export default function DayInfo() {
    return (
        <div className="text-xl space-y-2">
            <h3 className="uppercase font-black ">Pronóstico de 3 días</h3>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-x-5 gap-y-3">
                <DayCard index={0} />
                <DayCard index={1} />
                <DayCard index={2} />
            </div>
        </div>
    );
}
