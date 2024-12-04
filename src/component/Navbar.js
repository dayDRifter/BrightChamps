import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Quiz Platform</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/quizzes">Quizzes</Link>
        </li>
        <li>
          <Link to="/create-quiz">Create Quiz</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className="navbar-btn">
          Login
        </Link>
        <Link to="/signup" className="navbar-btn primary">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
