import logo from "./images/cat-logo.png";
import { useState } from "react";

const uriList = [
  {
    name: "Home",
    path: "#/",
  },
  {
    name: "Theories",
    path: "#/theories",
  },
  {
    name: "About",
    path: "#/about",
  },
];

function Header({ setPage }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    return menuVisible ? closeMenu() : openMenu();
  };

  const menuOpen = menuVisible ? "navbar__menu--open" : "";
  const menuIconStyle = menuVisible ? "gg-close" : "gg-menu";

  const navList = uriList.map((item) => {
    return (
      <li className="navbar__item" key={item.name}>
        <a
          href={item.path}
          className="navbar__link"
          tabIndex={menuVisible ? 0 : -1}
          onClick={(event) => {
            event.preventDefault();
            setPage(item.path);
            closeMenu();
          }}
        >
          {item.name}
        </a>
      </li>
    );
  });

  return (
    //   Header Component
    <header className="header">
      <a
        href="/"
        className="header__link"
        onClick={(event) => {
          event.preventDefault();
          setPage("#/");
        }}
      >
        <img
          src={logo}
          alt="Minimal logo depicting a sleeping cat."
          className="header__logo"
        />
      </a>
      <h1 className="header__title">Cats and Sleep</h1>
      <nav className="header__navbar navbar">
        <button
          className="navbar__menu-button"
          aria-label={menuVisible ? "Close Menu" : "Open Menu"}
          onClick={() => toggleMenu()}
        >
          <i className={`navbar__menu-icon ${menuIconStyle}`}></i>
        </button>
        <ul className={`navbar__menu ${menuOpen}`}>{navList}</ul>
      </nav>
    </header>
  );
}

export default Header;
