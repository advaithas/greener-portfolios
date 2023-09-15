import React from "react";
import { Routes, Route } from "react-router-dom";

import Home_route from "./routes/Home_route";
import Market_route from "./routes/Market_route";
import Portfolio_route from "./routes/Portfolio_route";
import News_route from "./routes/News_route";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_route />} />
        <Route path="/Portfolio" element={<Portfolio_route />} />
        <Route path="/News" element={<News_route />} />
        <Route path="/Market" element={<Market_route />} />
      </Routes>
    </>
  );
};

export default App;
