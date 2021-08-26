import { createContext } from "react";

export const themes = {
  dark: {
    type: "dark",
    foreground: "#ffffff",
    fontColor: "#ffffff",
    background: "#000000",
  },
  light: {
    type: "light",
    fontColor: "#000000",
    foreground: "#000000",
    background: "#ffffff",
  },
};

const initialState = {
  dark: false,
  theme: themes.light,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialState);
