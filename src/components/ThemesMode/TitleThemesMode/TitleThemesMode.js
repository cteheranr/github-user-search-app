import React from 'react';
import './TitleThemesMode.css';
import { ContextTheme } from '../../../Contexts/ContextThemes/ContextThemes';

function TitleThemesMode(){
    const { darkMode } = React.useContext( ContextTheme );
    const themeMode = darkMode ? 'LIGHT' : 'DARK';
    return(
        <div className='themes-mode'>
            <h1 className='title-theme'>{themeMode}</h1>  
        </div>
    )
}

export { TitleThemesMode };