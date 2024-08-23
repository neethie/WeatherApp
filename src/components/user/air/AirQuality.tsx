import { useMemo } from "react";
import { useStore } from "../../../slices/useStore";
import AirQualityIndexes from "./AirQualityIndexes";

export default function AirQuality() {
    const { forecast } = useStore();
    const getQualityText = useMemo(() => {
        let qualityText = "";
        if (forecast.current) {
            const qualityIndex = forecast.current.air_quality["us-epa-index"];

            if (qualityIndex <= 50) qualityText = "Bueno";
            if (qualityIndex > 50 && qualityIndex <= 100)
                qualityText = "Moderado";
            else if (qualityIndex > 100 && qualityIndex <= 150)
                qualityText = "No Saludable para Grupos Sensibles";
            else if (qualityIndex > 150 && qualityIndex <= 200)
                qualityText = "No Saludable";
            else if (qualityIndex > 200 && qualityIndex <= 300)
                qualityText = "Muy no saludable";
            else if (qualityIndex > 300 && qualityIndex <= 500)
                qualityText = "Peligroso";
        }

        return qualityText;
    }, [forecast]);

    return (
        <div className="text-xl space-y-2 -top-5 relative">
            <h3 className="uppercase font-black ">Calidad del Aire</h3>
            <div className=" p-5  bg-white rounded-3xl shadow-md dark:bg-darkmode-darker">
                <div className="bg-jagger-200 w-max px-6 py-2 rounded-3xl font-semibold mb-2 dark:bg-darkmode-ligther">
                    {getQualityText}
                </div>
                <div className="flex flex-row justify-between gap-1">
                    <AirQualityIndexes index={0} />
                    <AirQualityIndexes index={1} />
                    <AirQualityIndexes index={2} />
                    <AirQualityIndexes index={3} />
                </div>
            </div>
        </div>
    );
}
