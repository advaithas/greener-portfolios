import React, { useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [companyName, setCompanyName] = useState("");
  const [esgRiskScore, setESGRiskScore] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!companyName) {
      setError("Please enter a company name.");
      return;
    }

    // Replace with your backend server URL
    axios
      .get(`https://greener-portfolios.onrender.com/api?companyName=${companyName}`)
      .then((response) => {
        setESGRiskScore(response.data.esgRiskScore);
        setError(null);
      })
      .catch((err) => {
        setError("Error fetching ESG Risk Score. Please try again later.");
        console.error(err);
      });
  };

  return (
    <div className=" items-center justify-center">
      <h1 className="text-center text-6xl font-poppins p-5 pt-10 w-full">
        ESG Risk Score Search
      </h1>
      <p className="text-center text-2xl font-poppins p-3 mx-20">
        An ESG score is a way to assign a quantitative metric, such as a
        numerical score or letter rating, to the environmental, social and
        governance (ESG) efforts undertaken by a specific organization.
      </p>
      <div className="items-center justify-center p-5">
        <div className="flex justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="flex justify-center items-center p-5 text-xl underline">
          {error && <p>{error}</p>}
          {esgRiskScore !== null && <p>Total ESG Risk Score: {esgRiskScore}</p>}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
