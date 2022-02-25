export const DisableHome = () => {
    const HOME_1 = document.getElementsByClassName("mango") as HTMLCollectionOf<HTMLElement>;
    const HOME_2 = document.getElementsByClassName("bottom-mango") as HTMLCollectionOf<HTMLElement>;
    const BAR = document.getElementsByClassName("bottom-bar") as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < HOME_1.length; i += 1){
        HOME_1[i].style.display = "none";
    }

    for (var i = 0; i < HOME_2.length; i += 1){
        HOME_2[i].style.display = "none";
    }

    for (var i = 0; i < BAR.length; i += 1){
        BAR[i].style.display = "block";
    }
}

export const EnableHome = () => {
    const HOME_1 = document.getElementsByClassName("mango") as HTMLCollectionOf<HTMLElement>;
    const HOME_2 = document.getElementsByClassName("bottom-mango") as HTMLCollectionOf<HTMLElement>;
    const BAR = document.getElementsByClassName("bottom-bar") as HTMLCollectionOf<HTMLElement>;
    const APP = document.querySelectorAll<HTMLElement>(".call, .camera, .clock, .cloud, .ringtone, .wallpaper, .language, .contact, .health, .invader, .mail, .message, .music, .settings, .weather, .bg-blue, .bg-black");

    for (var i = 0; i < HOME_1.length; i += 1){
        HOME_1[i].style.display = "flex";
    }

    for (var i = 0; i < HOME_2.length; i += 1){
        HOME_2[i].style.display = "flex";
    }

    for (var i = 0; i < BAR.length; i += 1){
        BAR[i].style.display = "none";
    }

    for (var i = 0; i < APP.length; i += 1){
        APP[i].style.display = "none";
    }
}

export const openApplication = (app: string) => {
    const App = document.getElementsByClassName(`${app}`) as HTMLCollectionOf<HTMLElement>;
    const WeatherBg = document.getElementsByClassName("bg-blue") as HTMLCollectionOf<HTMLElement>;
    const SettingsBg = document.getElementsByClassName("bg-black") as HTMLCollectionOf<HTMLElement>;

    DisableHome()
    for (var i = 0; i < App.length; i += 1){
        App[i].style.display = "block";
    }

    if (app == "weather") {
        for (var i = 0; i < WeatherBg.length; i += 1){
            WeatherBg[i].style.display = "block";
        }
    }

    if (app == "settings") {
        for (var i = 0; i < SettingsBg.length; i += 1){
            SettingsBg[i].style.display = "block";
        }
    }
}

EnableHome()