import { IconTheme } from "./IconTheme/IconTheme";
import { TitleThemesMode } from "./TitleThemesMode/TitleThemesMode";
import './ThemesMode.css';
import React from "react";
import { ContextTheme } from "../../Contexts/ContextThemes/ContextThemes";

function ThemesMode(){
    const { toggleDarkMode } = React.useContext(ContextTheme);
    return ( 
        <div className="navbar" onClick={toggleDarkMode}>
            <TitleThemesMode/>
            <IconTheme/>
        </div>
    )
}

export { ThemesMode }