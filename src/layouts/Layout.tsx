import { Outlet } from "react-router-dom";
import Aside from "../components/nav/Aside";

export default function Layout() {
    return (
        <div className="grid grid-cols-[100px_1fr] bg-gray-100 dark:bg-darkmode-ligther min-h-screen min-w-screen">
            <Aside />
            <div className="w-[90%] mx-auto my-16">
                <Outlet />
            </div>
        </div>
    );
}
