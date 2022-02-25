import React from "react";
import { EnableSetting } from "./Switch";

export const Cloud: React.FC = () => {
    return (
        <div className="cloud">
            <a className="back_title"><i className="bi bi-chevron-left"></i> <a onClick={() => EnableSetting()}>Réglages</a></a>
            <a className="title">Cloud</a>

            <div className="card">
                <a className="card_text">Importer des images / vidéos</a>
            </div>
        </div>
    )
}