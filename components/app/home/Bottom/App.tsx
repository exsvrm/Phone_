import React from "react";

import "./styles.scss";
import { bottomApp } from "../../../../appList";
 
const BottomApp: React.FC = () => {
    const getApp = () => {
        return bottomApp.map((app) => {
            return <div className="bottom-app-icon"><img src={app.icon} alt="/" height="64px"/></div>
        })
    }

    return (
        <div className="bottom-mango">
            {getApp()}
        </div>
    )
}

export default BottomApp;