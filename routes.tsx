import React from "react";

const Home = React.lazy(() =>
    import("./components/home/home-main"));
const Settings = React.lazy(() =>
    import("./components/app/settings/settings-main"));
const Clock = React.lazy(() =>
    import("./components/app/clock/clock-main"));


const routes = [
    { path: "/", name: Home },
    { path: "/app/settings", name: Settings },
    { path: "/app/clock", name: Clock },
]

export default routes;