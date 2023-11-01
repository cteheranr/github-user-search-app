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
            <footer class="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://cteheranr.github.io/" target="_blank">Camilo Teheran</a>.
            </footer>
        </div>
    )
}

export { AppUI };