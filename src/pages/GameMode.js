import React, { Component } from "react";
import "../styles/GameMode.css";
import { Link } from "react-router-dom";

class GameMode extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Game Time</h1>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}

export default GameMode;
