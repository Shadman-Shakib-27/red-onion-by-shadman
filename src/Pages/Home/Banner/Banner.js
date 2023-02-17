import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="body">
      <div>
        <h1 className="Text">
          Best food waiting for your belly.
        </h1>
        <br />
        <input
          className="input1 text-center"
          type="text"
          name=""
          id=""
          placeholder="Search Food Items"
        />
        <input className="input2" type="submit" name="" id="" />
      </div>
    </div>
  );
};

export default Banner;
