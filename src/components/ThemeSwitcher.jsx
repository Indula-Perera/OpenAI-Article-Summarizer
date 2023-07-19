import { useEffect } from "react";
import { useState } from "react";
import {FaMoon} from "react-icons/fa"
import {BsSunFill} from "react-icons/bs"

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitcher = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
  };
  return <button onClick={handleThemeSwitcher}
  className="text-yellow-500 ">
    {theme === "dark" ? <FaMoon/>:<BsSunFill/>}
  </button>;
};

export default ThemeSwitcher;
