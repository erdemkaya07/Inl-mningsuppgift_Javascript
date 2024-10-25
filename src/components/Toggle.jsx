import React from "react";
import { useTheme } from "../api/theme";


function Toggle() {

  const [theme, handleChange] = useTheme('dark')


  return (
    <div className="toggle-container flex align-items-center">
      <span className="dark-mode-text mr-1 weigt-semi-bold" htmlFor="check">
        Dark Mode
      </span>
      <label className="switch mr-2" aria-label="toogle for dark mode">
        <input
          type="checkbox"
          aria-label="Change to light theme"
          onChange={handleChange} 
          checked={theme === 'dark'}
        />
        <span
          className="slider round"
          aria-label="Change to light theme"
        ></span>
      </label>
    </div>
  );
}

export default Toggle;
