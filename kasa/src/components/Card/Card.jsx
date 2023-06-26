import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
function Card({ id, title, cover }) {
  return (
    <Link to={`/location/${id}`} className="Card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
export default Card;
