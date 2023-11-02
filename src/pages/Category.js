import React from "react";
import "../styles/Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1>Pick a Topic</h1>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>
        <Link to="/game">Play</Link>
      </button>
    </div>
  );
};

export default Category;
