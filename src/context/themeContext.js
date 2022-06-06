import { createContext } from "react";
 
export const themes = {

  dark: "",
  light: "--purple",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
