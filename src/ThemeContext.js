import { createContext } from "react";

//mimic a hook
//const [theme, setTheme] =  useState('pink');
const ThemeContext = createContext(["#ba68c8", () => {}]);

export default ThemeContext;