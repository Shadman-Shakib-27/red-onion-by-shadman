import React, { useEffect, useState } from "react";
import Dinner from "../Dinner/Dinner";

const Dinners = () => {
  const [dinners, setDinners] = useState([]);

  useEffect(() => {
    fetch("Dinner.json")
      .then((res) => res.json())
      .then((data) => setDinners(data));
  }, []);
  return (
    <div>
      <h2 className="bg-danger text-light p-3">This is Only Dinner Section</h2>
      <div className="breakfast-section">
        {dinners.map((dinner) => (
          <Dinner key={dinner.id} dinner={dinner}></Dinner>
        ))}
      </div>
    </div>
  );
};

export default Dinners;
