import React, { useState } from "react";
import Form from "./Form";
import images from "../constants/images";

function Header({ addTask }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function handleThemeChange() {
    const root = document.documentElement;
    root.classList.toggle("theme__dark", !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <header className="app__header">
      <div className="app__header-logo_container section__padding">
        <h2 className="app__header-logo">TODO</h2>
        <button className="button__theme" onClick={handleThemeChange}>
          <img src={isDarkTheme ? images.sun : images.moon} alt="theme icon" />
        </button>
      </div>
      <Form addTask={addTask} />
    </header>
  );
}

export default Header;
