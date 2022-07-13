import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/GlobalStyles/Global.styles";
import Navbar from "../components/Nav/Navbar";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
