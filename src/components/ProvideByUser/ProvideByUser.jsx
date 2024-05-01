import React from "react";
import "../ProvideByUser/ProvByUser.css";
import data from "../../data";

const ProvideByUser = () => {
  const provide = data.feature;
  //   console.log(provide);

  return (
    <section className="feature">
      <h2 className="mx-auto font-semibold">Provide By User</h2>
      <div className="box">
        {provide.map((item) => {
          return (
            <div key={item.id} className="fe-box">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProvideByUser;
