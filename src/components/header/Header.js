import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <nav className="header-nav">
        <Link to={"/accueil"}>
          <img src="/assets/img/logo.svg" alt="Logo SportSee" />
        </Link>
        <Link to={"/#"} className="header-link">
          Acceuil
        </Link>
        <Link to={"/#"} className="header-link">
          Profil
        </Link>
        <Link to={"/#"} className="header-link">
          Réglage
        </Link>
        <Link to={"/#"} className="header-link">
          Communauté
        </Link>
      </nav>
    </header>
  );
};

export default Header;
