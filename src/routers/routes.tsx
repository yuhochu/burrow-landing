import React from "react";
import HomePage from "../pages/homePage/homePage";
import NotFoundPage from "../pages/notFoundPage";

const routes: { path: string, name: string, component: React.ReactNode }[] = [
    {
        path: "/",
        name: "Home",
        component: <HomePage className={"home-page"}/>
    },
    {
        path: "*",
        name: "notFound",
        component: <NotFoundPage/>
    },
];

export default routes;
