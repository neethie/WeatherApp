import { useState } from "react";
import { DefaultLocationValues } from "../../utils/defaultValues";
import { useStore } from "../../slices/useStore";

export default function SearchBar() {
    const [location, setLocation] = useState(DefaultLocationValues);
    const { fetchForecast } = useStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation({
            city: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchForecast(location);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="city"
                id="city"
                placeholder="Miami, Quito, Paris..."
                className="h-9 bg-gray-200 dark:bg-darkmode-ligther dark:border-darkmode-darker border rounded-3xl border-jagger-200 text-lg p-6 w-full md:w-[500px]"
                onChange={handleChange}
                value={location.city}
            />
        </form>
    );
}
