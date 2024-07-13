export default function WeatherCard() {
    return (
        <div className=" bg-white rounded-3xl p-5 shadow-lg border flex flex-col justify-between gap-3">
            <div className="flex justify-between">
                <p className="text-4xl justify-self-center">26°</p>
                <img src="/icons/weather/sun-high.svg" alt="sun" />
            </div>

            <div className="flex justify-between items-end">
                <div className="">
                    <p className="font-black uppercase text-lg m-0">Ciudad</p>
                    <p className="text-sm m-0">País</p>
                </div>
                <button>
                    <p>Ver</p>
                </button>
            </div>
        </div>
    );
}
