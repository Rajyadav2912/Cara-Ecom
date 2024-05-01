import React from "react";
import Home from "../components/Home/Home";
import ProvideByUser from "../components/ProvideByUser/ProvideByUser";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct";

const Main = () => {
  return (
    <div className="w-full flex flex-col bg-cover items-start justify-center">
      <Home />
      <ProvideByUser />
      <FeatureProduct />
    </div>
  );
};

export default Main;
