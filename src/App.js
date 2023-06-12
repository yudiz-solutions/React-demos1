import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "./Main_layout/Mainlayout";
import GamePlay from "./Game_layout/GamePlay";
import Sliderbar from "./Main_layout/Sliderbar";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/Game1" element={<GamePlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
