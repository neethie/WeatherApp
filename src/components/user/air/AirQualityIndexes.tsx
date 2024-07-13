import { useStore } from "../../../slices/useStore";

type AirQualityIndexesProps = {
    index: number;
};

type AirQuality = {
    [key: string]: number;
};

export default function AirQualityIndexes({ index }: AirQualityIndexesProps) {
    const { forecast } = useStore();
    const air_quality: AirQuality = {
        ...forecast.current.air_quality,
    };

    const names = ["co", "no2", "o3", "so2"];

    const IndexQuality = {
        name: names[index],
        value: air_quality[names[index]],
    };

    return (
        <div className="p-5 shadow-md bg-jagger-200 rounded-3xl text-base w-24 text-center dark:bg-darkmode-ligther">
            <p className="uppercase font-black">{IndexQuality.name}</p>
            <p className="font-black text-xl">{IndexQuality.value}</p>
            <p className="text-gray-500w">µg/m³</p>
        </div>
    );
}
