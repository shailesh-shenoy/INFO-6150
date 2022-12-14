import { useState } from "react";

import "./Header.css";

const uriList = [
  {
    name: "HISTORY",
    path: "#/history",
  },
  {
    name: "FACTS",
    path: "#/facts",
  },
  {
    name: "QUIZ",
    path: "#/quiz",
  },
];

function Header({ setPage, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    return menuOpen ? closeMenu() : openMenu();
  };

  const openThemeMenu = () => {
    setThemeMenuOpen(true);
  };

  const closeThemeMenu = () => {
    setThemeMenuOpen(false);
  };

  const toggleThemeMenu = () => {
    return themeMenuOpen ? closeThemeMenu() : openThemeMenu();
  };

  const menuStyle = menuOpen ? "navbar__menu--open" : "";
  const menuIconStyle = menuOpen ? "gg-close" : "gg-menu-left";

  const themeMenuStyle = themeMenuOpen ? "navbar__theme-menu--open" : "";
  const themeMenuIconStyle = themeMenuOpen ? "gg-close" : "gg-chevron-down";

  const navList = uriList.map((item) => {
    return (
      <li className="navbar__item" key={item.name}>
        <a
          href={item.path}
          className="navbar__link"
          onClick={(event) => {
            event.preventDefault();
            setPage(item.path);
            closeMenu();
            closeThemeMenu();
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    // Header Component
    <header className="header">
      <nav className="navbar">
        <a
          href="#/"
          className="navbar__logo-link"
          aria-label="Homepage"
          onClick={(event) => {
            event.preventDefault();
            setPage("#/");
            closeMenu();
            closeThemeMenu();
          }}
        >
          <i className="gg-coffee navbar__logo"></i>
        </a>
        <ul className={`navbar__menu ${menuStyle}`}>
          {navList}
          <li className="navbar__item navbar__theme-dropdown">
            <button
              className={`navbar__button ${
                themeMenuOpen ? "navbar__button--open" : ""
              }`}
              onClick={() => toggleThemeMenu()}
              aria-label={
                themeMenuOpen ? "Close Theme Menu" : "Open Theme Menu"
              }
            >
              THEME{" "}
              <i className={`navbar__button-icon ${themeMenuIconStyle}`} />
            </button>
            <ul className={`navbar__theme-menu ${themeMenuStyle}`}>
              <li className="navbar__theme-item">
                <button
                  className="navbar__theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("light");
                  }}
                >
                  LIGHT
                </button>
              </li>
              <li className="navbar__theme-item">
                <button
                  className="navbar__theme-button"
                  onClick={() => {
                    closeThemeMenu();
                    closeMenu();
                    setTheme("dark");
                  }}
                >
                  DARK
                </button>
              </li>
            </ul>
          </li>
        </ul>
        <button
          className="navbar__menu-button"
          aria-label={
            menuOpen ? "Close Navigation Menu" : "Open Navigation Menu"
          }
          onClick={() => {
            toggleMenu();
            closeThemeMenu();
          }}
        >
          <i className={`navbar__menu-icon ${menuIconStyle}`} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
