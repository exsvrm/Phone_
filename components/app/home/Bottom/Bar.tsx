import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export function BottomBar() {
    return (
        <Link to="/"><div className="bottom-bar" /></Link>
    )
}