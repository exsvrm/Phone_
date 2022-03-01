import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/home-main";
import Settings from "./components/app/settings/settings-main";

import "./global.scss";

ReactDOM.render(
    <React.StrictMode>
        <Home />
        
    </React.StrictMode>,
    document.getElementById("root")
);