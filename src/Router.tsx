import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import { lazy, Suspense } from "react";

const Main = lazy(() => import("./pages/Main"));

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={
                            <Suspense>
                                <Main />
                            </Suspense>
                        }
                    ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
