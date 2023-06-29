import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1>Qui est-ce ?</h1>
      <div className="profils">
        <Link to={"/profil/12"} className="profil-name">
          Karl
        </Link>
        <Link to={"/profil/18"} className="profil-name">
          Cecilia
        </Link>
      </div>
    </div>
  );
};

export default Home;
