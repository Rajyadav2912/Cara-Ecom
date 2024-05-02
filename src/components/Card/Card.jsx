import React from "react";
import "../Card/Card.css";
import { Link } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";
import { FaCartPlus } from "react-icons/fa6";

const Card = ({ brand, title, rating, price, image }) => {
  return (
    <div className="pro">
      <Link>
        <img src={image} alt="" />
      </Link>
      <div className="des">
        <span>{brand}</span>
        <h4>{title}</h4>
        <h5>
          {rating}
          <span className="flex ">
            <LiaStarSolid fontSize={18} color="rgb(251, 182, 6)" />
            <LiaStarSolid fontSize={18} color="rgb(251, 182, 6)" />
            <LiaStarSolid fontSize={18} color="rgb(251, 182, 6)" />
            <LiaStarSolid fontSize={18} color="rgb(251, 182, 6)" />
            <LiaStarSolid fontSize={18} color="rgb(251, 182, 6)" />
          </span>
        </h5>
        <div className="flex items-center justify-between">
          <h6>₹ {price}</h6>
          <Link className="cart">
            <FaCartPlus fontSize={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
