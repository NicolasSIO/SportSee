import React from "react";
import "./card.css";

const Card = ({ icon, category, quantity }) => {
  return (
    <div className="Card">
      <img
        src={icon}
        alt="Icone"
        className={
          category === "Calories"
            ? "icone calories"
            : category === "Protéines"
            ? "icone proteines"
            : category === "Glucides"
            ? "icone glucides"
            : "icone lipides"
        }
      />
      <div>
        <p className="quantity">
          {category === "Calories"
            ? `${quantity}kCal`
            : category === "Protéines"
            ? `${quantity}g`
            : category === "Glucides"
            ? `${quantity}g`
            : `${quantity}g`}
        </p>
        <p className="category">{category}</p>
      </div>
    </div>
  );
};

export default Card;
