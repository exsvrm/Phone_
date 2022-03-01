import React from "react";
import { Link } from "react-router-dom";

import BottomBar from '../home/Bottom/Bar';
import Wallpaper_01 from "../../../assets/img/acot08spi26tlqsu0ypgz02rhq1p64je.jpg";
import Wallpaper_02 from "../../../assets/img/be32q9401rqf2p61sk2vevm8qjq1mm40.jpg";
import Wallpaper_03 from "../../../assets/img/ghvr9sckfxze7w7j5e546wsc7f1ernus.jpg";
import Wallpaper_04 from "../../../assets/img/mak32kqgbqzikor0ugbyhlsv34vr70no.jpg";

interface Wallpaper {
    url?: string
}

const wallpaperList: Wallpaper[] = [
    { url: Wallpaper_01 },
    { url: Wallpaper_02 },
    { url: Wallpaper_03 },
    { url: Wallpaper_04 }

]

const Wallpaper: React.FC = () => {
    const getWallpaperList = () => {
        return wallpaperList.map((app) => {
            return <img src={app.url} />
        })
    }

    return (
        <>
        <div className="bg-black" />
        <div className="wallpaper">

        <Link to="/app/settings"><a className="back_title"><i className="bi bi-chevron-left"></i> <a>Réglages</a></a></Link>
            <a className="title">Fond d'écran</a>

            <div className="bgList">
                {getWallpaperList()}
            </div>
        </div>

        <BottomBar />
        </>
    )
}

export default Wallpaper;