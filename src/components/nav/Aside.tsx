import AsideButton from "./AsideButton";

export default function Aside() {
    return (
        <aside className="hidden md:flex py-10 bg-jagger-400 flex-col justify-between items-center">
            <div className="space-y-10">
                <div className="flex flex-col items-center">
                    <img src="/icons/sun.svg" alt="sun" className="w-5 " />
                    <p className="text-5xl font-black text-jagger-50">W</p>
                </div>

                <ul className="space-y-5 flex flex-col justify-center items-center">
                    <AsideButton icon="dashboard" />
                </ul>
            </div>

            <footer className="">
                <button>
                    <p className="font-bold text-xl text-gray-50">Login</p>
                </button>
            </footer>
        </aside>
    );
}
