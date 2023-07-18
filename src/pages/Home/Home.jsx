import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import IMG from "../../assets/IMG.png";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Body">
        <div className="section1">
          <Banner
            titleBanner="Chez vous, partout et ailleurs"
            imgBanner={IMG}
          />
        </div>
        <div className="gallery">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
