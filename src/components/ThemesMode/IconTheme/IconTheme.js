import { FaSun, FaMoon } from "react-icons/fa";
import './IconTheme.css';
import React from "react";
import { ContextTheme } from "../../../Contexts/ContextThemes/ContextThemes";

function IconTheme(){
    const { darkMode } = React.useContext(ContextTheme);
    if(darkMode){
        return <FaSun className="icon"/>
    }
    else{
        return <FaMoon className="icon"/>
    }

}

export { IconTheme };