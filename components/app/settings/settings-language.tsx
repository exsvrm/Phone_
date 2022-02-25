import React from "react";
import { EnableSetting } from "./Switch";

interface Language {
    icon?: string,
    name?: string,
    hr?: boolean
}

const languageList: Language[] = [
    { icon: "bi bi-flag-fill background-invisible", name: "Français", hr: false }
]

export const Language: React.FC = () => {
    const getLanguageList = () => {
        return languageList.map((app) => {
            return <span><b className={app.icon}></b><a style={{marginLeft: "15px"}} className="card_text">{app.name}</a>{app.hr === true ? <hr/> : <></>}</span>
        })
    }

    return (
        <div className="language">
            <a className="back_title"><i className="bi bi-chevron-left"></i> <a onClick={() => EnableSetting()}>Réglages</a></a>
            <a className="title">Langage</a>

            <div className="card">
                <a className="card_text">{getLanguageList()}</a>
            </div>

            <div className="informations_title">
                Seul le language Français est disponible pour le moment.
            </div>
        </div>
    )
}