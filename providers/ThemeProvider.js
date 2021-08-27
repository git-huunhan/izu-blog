/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeContext, themes } from "context/ThemeContext";
import { useState, useEffect } from "react";

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false); // Default theme is light
  const [toggle, setToggle] = useState(false);
  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    const isToggle = localStorage.getItem("toggle") === "true";

    setDark(isDark);
    setToggle(isToggle);
  }, [dark, toggle]);

  // To toggle between dark and light modes
  const toggleTheme = () => {
    const isDark = !dark;
    const isToggle = !toggle;

    localStorage.setItem("dark", JSON.stringify(isDark));
    localStorage.setItem("toggle", JSON.stringify(isToggle));

    setDark(isDark);
    setToggle(isToggle);
  };

  const theme = dark ? themes.dark : themes.light;
  const stToggle = toggle ? true : false;

  //console.log(stToggle);
  return (
    <ThemeContext.Provider value={{ theme, stToggle, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
