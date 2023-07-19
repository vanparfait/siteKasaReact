import React from "react";
import "./Card.css";
import { datas } from "../../data/data";
import { Link } from "react-router-dom";

const Card = ({ idCard }) => {
  return (
    <div className="Card">
      {datas.map((data) => (
        <div className="CardContainer" key={data.id}>
          <Link to={`/Logement/${data.id}`}>
            <img src={data.cover} alt={data.cover} />
          </Link>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
