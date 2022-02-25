import React from "react";

import "./styles.scss";


export const Weather: React.FC = () => {
    const Weather = 'Ensoleillé'
    return (
        <div className="weather">
            <span style={{whiteSpace: "pre-line"}}>
                <a className="title">Los santos</a>
                {`<br/>`.split("<br/>").join("\n")}
                <a className="title_temp">15°C</a>
                {`<br/>`.split("<br/>").join("\n")}
                <a className="desc">{Weather}</a>
            </span>
        </div>
    )
}