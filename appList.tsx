import React from "react";

import Settings from "./assets/img/00c6a135ad663d06d446a9f8f8185d0d.png";
import Clock from "./assets/img/d5b145eee21f4e4e9ab67df043c1e6a8.png";
import Weather from "./assets/img/aec81da0c54f60595b29530bf07286a1.png";
import Health from "./assets/img/161873665259263b621d3c11a4d5527e.png";
import Invader from "./assets/img/7ffcf39941f42e4c3622572253c50231.png";
// import Eyefind from "./assets/img/qeh2fwxzm74lpb12rvcv3gbrgx3f24un.png";
import Camera from "./assets/img/4e91afef5daab222126e4e6ada76eb63.png";
import Contact from "./assets/img/4b1d90456b68a8d4d4b91adb39e60b70.png";
import Mail from "./assets/img/2s1df4wd9rtl6r0nc5a2tk0xawwngv8w.png";
import Message from "./assets/img/55f6bb1cf03a0a560642e2f93f8b70a9.png";
import Call from "./assets/img/84a370c1acad80b026cca6ad3d0f356b.png";
import Music from "./assets/img/lz5o5kszateocr95trgdald7afjtqt4z.png";

export interface AppProps {
    name?: string,
    icon?: string,
    path?: string,
}

export const applications: AppProps[] = [
    { name: "Réglages", icon: Settings, path: "settings" },
    { name: "Horloge", icon: Clock, path: "clock" },
    { name: "Météo", icon: Weather, path: "weather" },
    { name: "Santé", icon: Health, path: "health" },
    { name: "Invader", icon: Invader, path: "invader" },
    { name: "Camera", icon: Camera, path: "camera" },
    { name: "Contacts", icon: Contact, path: "contact" },
    { name: "Mail", icon: Mail, path: "mail" }
]

export const bottomApp: AppProps[] = [
    { name: "", icon: Message },
    { name: "", icon: Call },
    { name: "", icon: Music }
]