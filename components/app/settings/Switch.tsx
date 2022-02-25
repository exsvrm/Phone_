import { copyFileSync } from "fs";
import React from "react";
import { Link, Router, Route } from "react-router-dom";
import $ from "jquery";

export const DisableSetting = () => {
    const SETTINGS = document.getElementsByClassName("settings") as HTMLCollectionOf<HTMLElement>;

    for (var i = 0; i < SETTINGS.length; i += 1){
        SETTINGS[i].style.display = "none";
    }
}

export const EnableSetting = () => {
    const SETTINGS = document.getElementsByClassName("settings") as HTMLCollectionOf<HTMLElement>;
    const APP = document.querySelectorAll<HTMLElement>(".call, .camera, .clock, .contact, .cloud, .language, .ringtone, .wallpaper, .health, .invader, .mail, .message, .music, .weather, .bg-blue");

    for (var i = 0; i < SETTINGS.length; i += 1){
        SETTINGS[i].style.display = "block";
    }

    for (var i = 0; i < APP.length; i += 1){
        APP[i].style.display = "none";
    }
}

export const openApplication = (app: string) => {
    const App = document.getElementsByClassName(`${app}`) as HTMLCollectionOf<HTMLElement>;

    DisableSetting()

    for (var i = 0; i < App.length; i += 1){
        App[i].style.display = "block";
    }
}