import React from "react";
// import "../FeatureProduct/FeatureProduct.css";
import data from "../../data";
import Card from "../Card/Card";

const FeatureProduct = () => {
  const product = data.product.men;

  return (
    <div className="product">
      <h2 className="mx-auto font-semibold"> Featured Products</h2>
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

export default FeatureProduct;
