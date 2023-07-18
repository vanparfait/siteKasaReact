import React, { useState } from "react";
import "./Collapse.css";
import chevrondownsolid from "../../assets/chevrondownsolid.svg";
import chevronupsolid from "../../assets/chevronupsolid.svg";

const Collapse = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="Collapse">
      <h1> {title} </h1>
      <img
        src={chevronupsolid}
        alt="chevron en haut"
        onClick={toogleCollapse}
      />

      <p>{data}</p>
    </div>
  ) : (
    <div className="Collapse">
      <h1> {title} </h1>
      <img
        src={chevrondownsolid}
        alt="chevron en bas"
        onClick={toogleCollapse}
      />
    </div>
  );
};

export default Collapse;
