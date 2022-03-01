import React from "react";
import { Link } from "react-router-dom";

import BottomBar from '../home/Bottom/Bar';

const Cloud: React.FC = () => {
    return (
        <>
        <div className="bg-black" />
        <div className="cloud">

        <Link to="/app/settings"><a className="back_title"><i className="bi bi-chevron-left"></i> <a>Réglages</a></a></Link>
            <a className="title">Cloud</a>

            <div className="card">
                <a className="card_text">Importer des images / vidéos</a>
            </div>
        </div>

        <BottomBar />
        </>
    )
}

export default Cloud;