import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import IMG2 from "../../assets/IMG2.png";

const About = () => {
  return (
    <div className="About">
      <Header />
      <Banner titleBanner="" imgBanner={IMG2} />
    </div>
  );
};

export default About;
