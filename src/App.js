/* eslint-disable no-undef */
import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { AboutPage, Menupage, Registration, ChatBox } from "./pages";
import "./App.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/menupage" element={< Menupage/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/order" element={<ChatBox />} />
      </Routes>
    </>
  );
};

export default App;
