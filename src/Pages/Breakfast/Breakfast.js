import React from "react";

const Breakfast = ({ breakfast }) => {
  const { name, img, price, description } = breakfast;
  return (
    <div>
      <div className="single-item shadow-lg mb-3">
        <img className="w-50 mt-4" src={img} alt="" />
        <h4 className="mt-3"> {name}</h4>
        <h5 className="mt-2">$ {price}</h5>
        <p className="mt-2"> {description}</p>
        <button className="btn btn-danger"> See Details</button>
      </div>
    </div>
  );
};

export default Breakfast;
