import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import QuizCreator from "./component/QuizCreator";
import QuizTaker from "./component/QuizTaker";
import Footer from "./component/Footer.js";

const App = () => {
  // const cors = require("cors");
  // App.use(cors());

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-quiz" element={<QuizCreator />} />
        <Route path="/take-quiz" element={<QuizTaker />} />
        <Footer />
      </Routes>
    </Router>
  );
};

export default App;
