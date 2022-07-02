import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/userDarkside";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === "light");

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div
      className={
        !darkSide
          ? "p-2 rounded-3xl hover:shadow hover:bg-zinc-300 "
          : "p-2 rounded-3xl hover:shadow hover:bg-[#7f8497]"
      }
    >
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </div>
  );
};

export default Switcher;
