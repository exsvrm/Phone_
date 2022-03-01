import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import BottomBar from '../home/Bottom/Bar';

interface Settings {
    icon?: string,
    name?: string,
    path?: string,
    hr?: boolean
}

const settingsList: Settings[] = [
    { icon: "bi bi-braces-asterisk background-purple", name: "Fond d'écran", path: "wallpaper", hr: true },
    { icon: "bi bi-volume-up-fill background-red", name: "Sonnerie", path: "ringtone", hr: true },
    { icon: "bi bi-cloud-download background-blue", name: "Cloud", path: "cloud", hr: true },
    { icon: "bi bi-translate background-blue", name: "Langage", path: "language", hr: false }
]

const Settings: React.FC<Settings> = (props: Settings) => {
    const getSettingsList = () => {

        return settingsList.map((app) => {
            const newPath = `./settings-${app.path}`

            return <Link to={newPath}><span style={{color: "white"}}>
                <i className={app.icon}></i><a style={{marginLeft: "15px"}} className="card_text">{app.name}</a>{app.hr === true ? <hr/> : <></>}</span></Link>
        })
    }

    return (
        <>
        <div className="bg-black" />
        <div className="settings">

            <a className="title">Réglages</a>

            <div className="card">
                <img src={require("../../../assets/img/person-rounded-background.png")} alt="Pic" height="48px" className="card_img"/>
                <span className="card_t" style={{whiteSpace: "pre-line"}}>
                    <span>azdfhbazfgyhuyfu4727</span>
                    {`<br/>`.split("<br/>").join("\n")}
                    <span className="card_mango">Id. Mango</span>
                </span>
            </div>

            <div className="card" style={{marginTop: "150px"}}>
                {getSettingsList()}
            </div>

        </div>
        <BottomBar />
        </>
    )
}

export default Settings;