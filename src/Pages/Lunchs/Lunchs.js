import React, { useEffect, useState } from "react";
import Lunch from "../Lunch/Lunch";

const Lunchs = () => {
  const [lunchs, setLunchs] = useState([]);

  useEffect(() => {
    fetch("Lunch.json")
      .then((res) => res.json())
      .then((data) => setLunchs(data));
  }, []);
  return (
    <div>
      <h2 className="bg-danger text-light p-3">This is Only Lunch Section</h2>
      <div className="breakfast-section">
        {lunchs.map((lunch) => (
          <Lunch key={lunch.id} lunch={lunch}></Lunch>
        ))}
      </div>
    </div>
  );
};

export default Lunchs;
