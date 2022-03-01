import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home-main";
import Settings from "./components/app/settings/settings-main";

import "./global.scss";

ReactDOM.render(
    <Router>
        <Home/>
        <Routes>
            <Route path="/" element={Home}/>
            <Route path="/app/settings" element={<Settings />}/>
        </Routes>
    </Router>,
    document.getElementById("root")
);