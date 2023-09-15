import React from "react";

const Card = ({ title, imageSrc, description }) => {
  return (
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 class="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
      <div class="relative">
        <img className="w-full rounded-xl" src={imageSrc} alt={title} />
      </div>
      <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
        {description}
      </h1>
      <div class="my-4">
        <div class="flex space-x-1 items-center"></div>
        <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          Go to product
        </button>
      </div>
    </div>
  );
};

export default Card;
