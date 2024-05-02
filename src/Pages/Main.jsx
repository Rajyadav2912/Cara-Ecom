import React from "react";
import Home from "../components/Home/Home";
import ProvideByUser from "../components/ProvideByUser/ProvideByUser";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct";
import NewArrivals from "../components/NewArrival/NewArrivals";

const Main = () => {
  return (
    <div className="w-full flex flex-col bg-cover items-start justify-center">
      <Home />
      <ProvideByUser />
      <FeatureProduct />
      <NewArrivals />
    </div>
  );
};

export default Main;
