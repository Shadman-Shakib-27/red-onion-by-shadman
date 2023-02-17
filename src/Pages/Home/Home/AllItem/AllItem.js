import React from "react";
import "./AllItem.css";

const AllItem = ({ allItem }) => {
  const { id, price, name, img, description } = allItem;
  return (
    <div className="single-item shadow-lg mb-3">
      <img className="w-50 mt-4" src={img} alt="" />
      <h4 className="mt-3"> {name}</h4>
      <h5 className="mt-2"> $ {price}</h5>
      <p className="mt-2"> {description}</p>
      <button className="btn btn-danger"> See Details</button>
    </div>
  );
};

export default AllItem;
