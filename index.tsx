import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Phone from "./components/phone/phone-main";
import Settings from "./components/app/settings/settings-main";

import "./global.scss";

ReactDOM.render(
    <Router>
        <Phone/>
    </Router>,
    document.getElementById("root")
);