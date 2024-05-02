import React from "react";
import "../NewArrival/NewArrivals.css";
import Card from "../Card/Card";
import data from "../../data";

const NewArrivals = () => {
  const product = data.product.women;

  return (
    <div className="product">
      <h2 className="mx-auto font-semibold"> New Arrivals</h2>
      <p>Summer Collection New Morden Design</p>
      <div className="pro-container">
        {product.map((value, index) => {
          return (
            <Card
              key={index}
              brand={value.brand}
              title={value.title}
              rating={value.rating}
              price={value.price}
              image={value.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
