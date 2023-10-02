import React from "react";

const ContextTheme = React.createContext();

function ThemeProvider({ children }){
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ContextTheme.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
            {children}
        </ContextTheme.Provider>
    )
}

export { ContextTheme, ThemeProvider };