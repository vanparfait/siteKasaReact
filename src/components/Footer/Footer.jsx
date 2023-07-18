import React from "react";
import "./Footer.css";
import LOGO1 from "../../assets/LOGO.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterKasa">
        <img src={LOGO1} alt="Logo de Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
