import React from "react";
import { Logo } from '../Logo/Logo';
import { ThemesMode } from '../ThemesMode/ThemesMode';
import { ContextTheme } from "../../Contexts/ContextThemes/ContextThemes";
import { SearchUser } from "../SearchUser/SearchUser";

import './App.css';
import { CardProfile } from "../CardProfile/CardProfile";

function AppUI(){
    const { darkMode } = React.useContext(ContextTheme);
    const ClassCss = darkMode ? 'container theme-dark' : 'container';
    return (
        <div className={ClassCss}>
            <div className="container-app">
                <nav className="nav-content">
                    <Logo/>
                    <ThemesMode/>
                </nav>
                <section>
                    <SearchUser/>
                </section>
                <main>
                    <CardProfile/>
                </main>
            </div>
        </div>
    )
}

export { AppUI };