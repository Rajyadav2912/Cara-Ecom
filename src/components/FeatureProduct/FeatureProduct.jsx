import React from "react";
import "../FeatureProduct/FeatureProduct.css";
import data from "../../data";
import Card from "../Card/Card";

const FeatureProduct = () => {
  const product = data.product.men;

  return (
    <div className="product">
      <h2 className="mx-auto font-semibold"> Feature Product</h2>
      <p>Summer Collection New Morden Design</p>
      {product.map((value, index) => {
        return (
          <Card
            key={index}
            brand={value.brand}
            title={value.title}
            rating={value.rating}
            price={value.price}
            description={value.description}
            image={value.image}
          />
        );
      })}
    </div>
  );
};

export default FeatureProduct;
