import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Category from "./pages/Category";
import GameMode from "./pages/GameMode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Playbtn from "./components/Playbtn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/game" element={<GameMode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
