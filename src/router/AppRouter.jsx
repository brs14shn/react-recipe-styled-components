import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/GlobalStyles/Global.styles";
import Navbar from "../components/Nav/Navbar";
import About from "../pages/About/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />}></Route>
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />}></Route>
        </Route>

        <Route path="login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
