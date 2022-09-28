import React from "react";
import "./Item.css";
const Item = ({ avatar, name, review }) => {
  return (
    <div className="cont">
      <div className="cont__content">
        <div className="img__container">
          <img src={avatar} alt={avatar} className="img" />
        </div>

        <div className="text_cont">
          <h2>{name}</h2>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
