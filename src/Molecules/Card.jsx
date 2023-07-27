import { Rating } from "@smastrom/react-rating";
import React from "react";

const Card = (props) => {
  return (
    <div>
      <img className="object-fill rounded-sm" src={props.src} alt="img" />
      <p className="py-1">{props.nama}</p>
      <Rating style={{ maxWidth: 70 }} value={props.value} readOnly />
    </div>
  );
};

export default Card;
