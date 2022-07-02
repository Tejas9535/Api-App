/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./common";
import AnimeNews from "./components/animeNews";
import Memes from "./components/memesPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/memes" element={<Memes />} />
        <Route path="/anime" element={<AnimeNews />} />
      </Routes>
    </>
  );
};

export default App;
