import React, { useState } from "react";
import axios from "axios";

const NewsComponent = () => {
  const [companyName, setCompanyName] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = () => {
    if (!companyName) {
      setError("Please enter a company name.");
      return;
    }

    const apiKey = "c2f1dcde50c448c08a2c2b6b9c0bc580";
    const prompt = "sustainability " + companyName;
    console.log(prompt);
    const apiUrl = `https://newsapi.org/v2/everything?q=${prompt}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const top5Articles = response.data.articles.slice(0, 10);
        setNewsData(top5Articles);
        setError(null);
      })
      .catch((err) => {
        setError("Error fetching news data. Please try again later.");
        console.error(err);
      });
  };

  return (
    <div>
      <div className="">
        <h1 className="text-center text-6xl font-poppins p-5 w-full mx-auto pt-10">
          Welcome to the News Section
        </h1>
        <h2 className="text-center text-2xl font-poppins p-5 w-full mx-auto">
          Company News
        </h2>
        <div className="search-container p-5 gap-3 justify-center">
          <input
            type="text"
            placeholder="Enter company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button onClick={fetchNews}>Search</button>
        </div>
        <div className="text-center font-poppins">
          <h1 className="text-xl">
            Read the latest news on companies regarding sustainability
          </h1>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10 relative">
          <ul class="sm:col-span-7 grid grid-cols-2 lg:grid-cols-5 gap-10">
            {newsData.map((article, index) => (
              <li
                key={index}
                className=" border-2 rounded-lg p-3 hover:scale-110 cursor-pointer duration-500 ease-in-out underline"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {article.title}
                </a>
                <br />
                <img
                  src={article.urlToImage}
                  alt="News"
                  className=" h-40 bg-cover text-center overflow-hidden rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
