import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Online Quiz Platform</h1>
      <Link to="/create-quiz">
        <button>Create Quiz</button>
      </Link>
      <Link to="/take-quiz">
        <button>Take Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
