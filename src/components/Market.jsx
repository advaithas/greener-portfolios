import React from "react";
import CardsContainer from "./assets/CardsContainer";

const Market = () => {
  return (
    <>
      <div className="text-center  font-poppins p-5 w-full">
        <h1 className="text-6xl p-5">Welcome to the Marketplace</h1>
        <h1 className="text-2xl p-5">
          Browse through our partnered brand's sustainable products
        </h1>
      </div>
      <CardsContainer />
    </>
  );
};

export default Market;
