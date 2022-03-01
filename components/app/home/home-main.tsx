import React from "react";
import { applications } from "../../../appList";
import BottomApp from "./Bottom/App";
import { Link } from 'react-router-dom';

import "./styles.scss";

const Home: React.FC = () => {
    const getApp = () => {
        return applications.map((app, index) => {
            const newPath = `../app/${app.path}`

            return <div className="mango-icon">
                <Link to={newPath}><img id={app.path} src={app.icon} alt={app.name} height="64px"/></Link>
            <div className="mango-title"><a>{app.name}</a></div></div>
        })
    }

    return (
        <>
            <div className="mango">{getApp()}</div>

            <BottomApp/>
        </>
    )
}

export default Home;