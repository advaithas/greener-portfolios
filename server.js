const express = require("express");
const app = express();
require("dotenv").config();

const port1 = process.env.PORT1 || 4000;

app.listen(port1, () => console.log("Server is running"));
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
    origin: "https://greener-portfolios.netlify.app/", 
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

