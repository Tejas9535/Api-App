/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import AnimeNews from "./components/animeNews";
import Memes from "./components/memesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/memes" element={<Memes />} />
      <Route path="/anime" element={<AnimeNews />} />
    </Routes>
  );
};

export default App;
