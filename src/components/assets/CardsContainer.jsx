import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardsContainer = () => {
  const [cardsData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching staff data:", error);
      });
  }, []);

  return (
    <div className="w-full lg:col-span-8 xl:col-span-9 bg-white rounded-lg px-4 pb-2 shadow-xl">
      <h1 className="text-gray-800 text-center font-bold p-4 text-xl uppercase subpixel-antialiased"></h1>
      <hr />
      <div className="pt-3 pb-2 w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 items-center justify-center ">
        {cardsData.map((cardData) => (
          <Card cardData={cardData} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
