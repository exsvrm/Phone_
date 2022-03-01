import React from "react";
import { AppProps, applications } from "../../../appList";
import { BottomApp } from "./Bottom/App";
import { BottomBar } from "./Bottom/Bar"; // <-- not on home
import { Link } from 'react-router-dom';

import "./styles.scss";

const Home: React.FC<AppProps> = (p: AppProps) => {
    const getApp = () => {
        return applications.map((app, index) => {
            const newPath = `../app/${app.path}`

            return <div className="mango-icon">
                <Link to={newPath}><img id={app.path} src={app.icon} alt={app.name} height="64px"/></Link>
            <div className="mango-title"><a>{app.name}</a></div></div>
        })
    }

    return (
        <div className="container">
            <div className="bg"></div><div className="bg-blue"></div><div className="bg-black"></div>
            <div className="case"></div>
              <div className="content">
                <div className="header">
                    <div className="header-left">
                    <div className="header-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.418 78.418"><path d="M13.33-31.934l28.076.146c.635,0,.83.244.83.879l.1,27.979c0,4.1,1.807,7.471,5.225,7.471,3.32,0,5.078-3.125,6.641-6.543L83.105-64.453A10.216,10.216,0,0,0,84.277-68.9a4.811,4.811,0,0,0-4.932-4.98A10.952,10.952,0,0,0,74.9-72.705L12.4-43.8c-3.271,1.514-6.543,3.32-6.543,6.689C5.859-33.789,9.082-31.934,13.33-31.934Z" transform="translate(-5.859 73.877)"/></svg></div></div>
                    <div className="header-right"><div className="header-icon"><i className="bi bi-reception-4"></i> <i className="bi bi-wifi"></i> <i className="bi bi-battery-full"></i></div></div>
                </div>

                    <div className="mango">{getApp()}</div>

                    <BottomApp/>
                    <BottomBar/>
            </div>
        </div>
    )
}

export default Home;