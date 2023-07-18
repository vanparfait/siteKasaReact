import React from "react";
import "./Banner.css";

const Banner = ({ titleBanner, imgBanner }) => {
  return (
    <div className="Banner">
      <h1>{titleBanner}</h1>
      <img src={imgBanner} alt="banniere" />
    </div>
  );
};

export default Banner;
