import React from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/LOGO.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO} alt="logo de Kasa" />
      </div>
      <nav>
        <NavLink className="lien1" activeclassname="active" to="/">
          Accueil
        </NavLink>
        <NavLink className="lien2" activeclassname="active" to="/about">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
