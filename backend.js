const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URL and database name
const url = process.env.DATABASE_URL;
const dbName = "esg"; 
const collectionName = "esg_rating"; 

// Middleware for parsing JSON requests
app.use(express.json());

app.use(
  cors({
    origin: "https://greener-portfolios.netlify.app/", 
  })
);

// Endpoint to search for ESG Risk Score by company name
app.get("/api", async (req, res) => {
  try {
    const companyName = req.query.companyName;

    // Create a MongoDB client
    const client = new MongoClient(url, { useUnifiedTopology: true });

    // Connect to the MongoDB server
    await client.connect();

    // Get a reference to the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Search for the company by name and retrieve the Total ESG Risk score
    const result = await collection.findOne({ Name: companyName });

    // Close the MongoDB client connection
    client.close();

    if (!result) {
      return res.status(404).json({ error: "Company not found" });
    }

    res.json({ esgRiskScore: result["Total ESG Risk score"] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
