import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllItem from "../Home/AllItem/AllItem";
import './ItemDisplay.css'

const ItemDisplay = () => {
  const [allItems, setAllItems] = useState([]);
  useEffect(() => {
    fetch("AllItems.json")
      .then((res) => res.json())
      .then((data) => setAllItems(data));
  }, []);
  return (
    <div className="mt-5">
      <Link
        className=" bg-danger rounded text-decoration-none font-weight-bolder  text-light p-2 mx-2"
        to="/Breakfasts"
      >
        Breakfast
      </Link>
      <Link className="bg-danger rounded text-decoration-none font-weight-bolder  text-light p-2 mx-2" to='/Lunchs'>
        Lunch
      </Link>
      <Link className="bg-danger rounded text-decoration-none font-weight-bolder  text-light p-2 mx-2" to='/Dinners'>
        Dinner
      </Link>

      <div className="all-items mt-5">
      {
        allItems.map(allItem=><AllItem key={allItem.id} allItem={allItem}></AllItem>)
      }
      </div>
    </div>
  );
};

export default ItemDisplay;
