import React from "react";
import SpaceVideo from "../components/assets/renewable.mp4";

const Home = () => {
  return (
    <div className="hero pb-5">
      <video autoPlay loop muted id="video">
        <source src={SpaceVideo} type="video/mp4" />
      </video>
      <div className="content p-5">
        <h1>SUSTAINABLE FUTURE</h1>
        <p>INVEST IN A BETTER TOMORROW</p>
      </div>
    </div>
  );
};

export default Home;
