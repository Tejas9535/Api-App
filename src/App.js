/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Routes } from "react-router-dom";
import AnimeNews from "./components/animeNews";
import Memes from "./components/memesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Memes />} />
      <Route path="/anime" element={<AnimeNews />} />
    </Routes>
  );
};

export default App;
