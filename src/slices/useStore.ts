import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { weatherSlice, WeatherSliceType } from "./weatherSlice";

export const useStore = create<WeatherSliceType>()(
    devtools((...a) => ({
        ...weatherSlice(...a),
    }))
);
