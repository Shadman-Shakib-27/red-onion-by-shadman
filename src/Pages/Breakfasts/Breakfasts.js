import React, { useEffect, useState } from "react";
import Breakfast from "../Breakfast/Breakfast";
import "./Breakfasts.css";

const Breakfasts = () => {
  const [breakfasts, setBreakfasts] = useState([]);

  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfasts(data));
  }, []);
  return (
    <div>
      <h2 className="bg-danger text-light p-3">This is Only Breakfast Section</h2>
      <div className="breakfast-section">
        {breakfasts.map((breakfast) => (
          <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>
        ))}
      </div>
    </div>
  );
};

export default Breakfasts;
