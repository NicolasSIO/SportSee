import React from "react";
import { Link } from "react-router-dom";

import "./errorApi.css";

const ErrorApi = () => {
  return (
    <main className="Error">
      <div className="error-container">
        <p className="error-text">L'api ne fonctionne pas</p>
        <span>
          <Link to="/accueil" className="error-link">
            Retourner sur la page d'accueil
          </Link>
        </span>
      </div>
    </main>
  );
};

export default ErrorApi;
