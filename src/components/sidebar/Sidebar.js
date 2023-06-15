import React from "react";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <img
            src="/assets/icons/meditation.svg"
            alt="Meditation icone"
            className="sidebar-icons"
          />
        </li>
        <li className="sidebar-item">
          <img
            src="/assets/icons/swimming.svg"
            alt="Swimming icone"
            className="sidebar-icons"
          />
        </li>
        <li className="sidebar-item">
          <img
            src="/assets/icons/biking.svg"
            alt="Biking icone"
            className="sidebar-icons"
          />
        </li>
        <li className="sidebar-item">
          <img
            src="/assets/icons/dumbbell.svg"
            alt="Dumbbell icone"
            className="sidebar-icons"
          />
        </li>
      </ul>
      <p className="copyright">Copiryght, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
