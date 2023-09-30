const express = require("express");
const app = express();
require("dotenv").config();

app.listen(4000, () => console.log("Server is running"));
const mongoose = require("mongoose");
const cors = require("cors");
const conn = process.env.DATABASE_URL+"Product_database";
mongoose.connect(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const esgSchema = new mongoose.Schema({
  comapanyName: String,
  esg_score: Number,
});
const productSchema = new mongoose.Schema({
  productName: String,
  productDesc: String,
});

const ESG = mongoose.model("esg_score", esgSchema);
const Product = mongoose.model("Product", productSchema);

app.use(
  cors({
    origin: "http://127.0.0.1:5173", // Replace with your frontend URL
  })
);
app.get("/", async (req, res) => {
  try {
    const foundProducts = await Product.find({}).exec();
    res.send(foundProducts);
  } catch (err) {
    console.error("Error occurred: " + err);
    res.status(500).send("Some error occurred!");
  }
});
app.get("/esg", async (req, res) => {
  try {
    const esgProducts = await ESG.find({}).exec();
    res.send(esgProducts);
    console.log(esgProducts);
  } catch (err) {
    console.error("Error occurred: " + err);
    res.status(500).send("Some error occurred!");
  }
});

