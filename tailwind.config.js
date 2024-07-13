/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateAreas: {
                card: ["icon   void", "temp   location"],
            },
            backgroundColor: {
                jagger: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ded6fe",
                    300: "#c5b4fe",
                    400: "#a98afb",
                    500: "#8c5bf7",
                    600: "#7f38ef",
                    700: "#7026db",
                    800: "#5d20b7",
                    900: "#4e1c96",
                    950: "#250c50",
                },
                darkmode: {
                    ligther: "#121416",
                    darker: "#181b20",
                },
            },
            textColor: {
                jagger: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ded6fe",
                    300: "#c5b4fe",
                    400: "#a98afb",
                    500: "#8c5bf7",
                    600: "#7f38ef",
                    700: "#7026db",
                    800: "#5d20b7",
                    900: "#4e1c96",
                    950: "#250c50",
                },
            },
            borderColor: {
                jagger: {
                    50: "#f5f3ff",
                    100: "#ede9fe",
                    200: "#ded6fe",
                    300: "#c5b4fe",
                    400: "#a98afb",
                    500: "#8c5bf7",
                    600: "#7f38ef",
                    700: "#7026db",
                    800: "#5d20b7",
                    900: "#4e1c96",
                    950: "#250c50",
                },
                darkmode: {
                    ligther: "#121416",
                    darker: "#181b20",
                },
            },
        },
    },
    plugins: [],
};
