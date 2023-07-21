import React, { useEffect, useState } from "react";
import "./Logement.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carrousel/Carrousel";
import { datas } from "../../data/data";
import Collapse from "../../components/Collapse/Collapse";
import greyStar from "../../assets/greyStar.png";
import redStar from "../../assets/redStar.png";

const Logement = () => {
  const { idCard } = useParams();
  console.log(idCard);

  const [imageSlider, setImageSlider] = useState([]);

  const dataCurrentLogement = datas.filter((data) => data.id === idCard);
  console.log(dataCurrentLogement);

  useEffect(() => {
    const dataCurrentLogement = datas.filter((data) => data.id === idCard);
    setImageSlider(dataCurrentLogement[0].pictures);
  }, [idCard]);

  const name = dataCurrentLogement[0].host.name.split(" ");
  const rating = dataCurrentLogement[0].rating;
  const description = dataCurrentLogement[0].description;
  const equipements = dataCurrentLogement[0].equipments.map((equipement) => (
    <li>{equipement}</li>
  ));

  return (
    <div>
      <Header />
      <Carousel images={imageSlider} />
      <div className="logement">
        <div className="logement_content">
          <div className="logement_content_infos">
            <h1>{dataCurrentLogement[0].title}</h1>
            <p>{dataCurrentLogement[0].location}</p>
            <div>
              {dataCurrentLogement[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="logement_content_host">
            <div>
              <div className="logement_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentLogement[0].host.picture}
                alt="host of this Logement"
              />
            </div>

            <div className="logement_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item1">
            <Collapse title="Description" data={description} />
          </div>
          <div className="accomodation_collapse_item2">
            <Collapse title="Équipements" data={equipements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;
