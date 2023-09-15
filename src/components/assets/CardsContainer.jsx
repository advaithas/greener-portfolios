import React from "react";
import Card from "./Card";

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const port = 3000;

// // Connect to MongoDB
// mongoose
//   .connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

// // Define a schema for your products
// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
// });

// const Product = mongoose.model("Product", productSchema);
// mongoose.connect("mongodb://localhost:27017/Product_database");
// // Define a route to fetch a product's description
// app.get("/products", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json({ description: product.description });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const CardsContainer = () => {
  return (
    <div className="w-full lg:col-span-8 xl:col-span-9 bg-white rounded-lg px-4 pb-2 shadow-xl">
      <h1 className="text-gray-800 text-center font-bold p-4 text-xl uppercase subpixel-antialiased">
        title
      </h1>
      <hr />
      <div className="pt-3 pb-2 w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginnersssssss"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
        <Card
          title="Javascript Bootcamp for Absolute Beginners"
          imageSrc="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          description="Learn the basics of JavaScript with our beginner-friendly bootcamp."
        />
      </div>
    </div>
  );
};

export default CardsContainer;
