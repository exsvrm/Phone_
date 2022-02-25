import React from "react";

import "./styles.scss";
import { EnableHome } from '../PhoneSwitchPath';

export function BottomBar() {
    return (
        <div onClick={() => EnableHome()} className="bottom-bar"></div>
    )
}