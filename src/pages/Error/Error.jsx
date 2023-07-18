import React from "react";
import Header from "../../components/Header/Header";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error">
      <Header />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="retour" to="./">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;
