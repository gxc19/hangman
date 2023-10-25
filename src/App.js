import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Playbtn from "./components/Playbtn";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
        <Playbtn />
      </div>
    </Router>
  );
};

export default App;
