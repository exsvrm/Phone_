import React from "react";
import BottomBar from '../home/Bottom/Bar';

import "./styles.scss";

const Weather: React.FC = () => {
    const Weather = 'Ensoleillé'
    return (
        <>
        <div className="bg-blue" />
        
        <div className="weather">
            <span style={{whiteSpace: "pre-line"}}>
                <a className="title">Los santos</a>
                {`<br/>`.split("<br/>").join("\n")}
                <a className="title_temp">15°C</a>
                {`<br/>`.split("<br/>").join("\n")}
                <a className="desc">{Weather}</a>
            </span>
        </div>
        <BottomBar />
        </>
    )
}

export default Weather;