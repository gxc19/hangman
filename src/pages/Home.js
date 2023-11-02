import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hangman</h1>
      <button>
        <Link to="/category">Play</Link>
      </button>
    </div>
  );
};

export default Home;
