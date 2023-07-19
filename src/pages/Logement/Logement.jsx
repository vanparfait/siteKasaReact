import React from "react";
import "./Logement.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carrousel/Carrousel";
import { datas } from "../../data/data";

const Logement = () => {
  const { idCard } = useParams();
  console.log(idCard);

  return (
    <div>
      <Header />
      <Carousel images={datas} />
    </div>
  );
};

export default Logement;
