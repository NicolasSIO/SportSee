import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <nav className="header-nav">
        <a href="/#">
          <img src="/assets/img/logo.svg" alt="Logo SportSee" />
        </a>
        <a href="/#" className="header-link">
          Acceuil
        </a>
        <a href="/#" className="header-link">
          Profil
        </a>
        <a href="/#" className="header-link">
          Réglage
        </a>
        <a href="/#" className="header-link">
          Communauté
        </a>
      </nav>
    </header>
  );
};

export default Header;
