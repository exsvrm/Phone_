import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const BottomBar = () => {
    return (
        <Link to="/"><div className="bottom-bar" /></Link>
    )
}

export default BottomBar;