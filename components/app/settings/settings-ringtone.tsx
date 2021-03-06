import React from "react";
import { Link } from "react-router-dom";

import BottomBar from '../home/Bottom/Bar';

interface Ringtone {
    icon?: string,
    name?: string,
    hr?: boolean
}

const ringtoneList: Ringtone[] = [
    { icon: "bi bi-volume-up-fill background-red", name: "Basique", hr: true },
    { icon: "bi bi-volume-up-fill background-purple", name: "Fond de mer", hr: false }
]

const Ringtone: React.FC = () => {
    const getRingtoneList = () => {
        return ringtoneList.map((app) => {
            return <span><b className={app.icon}></b><a style={{marginLeft: "15px"}} className="card_text">{app.name} </a>{app.hr === true ? <hr/> : <></>}</span>
        })
    }

    return (
        <>
        <div className="bg-black" />
        <div className="ringtone">

        <Link to="/app/settings"><a className="back_title"><i className="bi bi-chevron-left"></i> <a>Réglages</a></a></Link>
            <a className="title">Sonnerie</a>

            <div className="card">
                {getRingtoneList()}
            </div>
        </div>

        <BottomBar />
        </>
    )
}

export default Ringtone;