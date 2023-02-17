import React from "react";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import ItemDisplay from "../ItemDisplay/ItemDisplay";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ItemDisplay></ItemDisplay>
    </div>
  );
};

export default Home;
