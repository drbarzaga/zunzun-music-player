import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDarkMode);
    }, []);

    useEffect(() => {
        const handleThemeChange = (event) => {
            setIsDarkMode(event.matches);
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;