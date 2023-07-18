import React from "react";
import "./Card.css";
import { datas } from "../../data/data";

const Card = () => {
  return (
    <div className="Card">
      {datas.map((data) => (
        <div className="CardContainer" key={data.id}>
          <img src={data.cover} alt={data.cover} />
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
