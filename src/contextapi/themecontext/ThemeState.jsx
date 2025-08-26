import React, { useState, useEffect } from "react";
import themeContext from "./themeContext";


function ThemeState({ children }) {
  // Get theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  // Whenever theme changes, save to localStorage
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const lightMode = () => setTheme("light");
  const darkMode = () => setTheme("dark");

  return (
    <themeContext.Provider value={{ theme, lightMode, darkMode }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeState;
