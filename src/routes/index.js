import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Errors from "../pages/404";
import Fiche from "../pages/Fiche";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Fiche/:idLog" element={<Fiche />} />
      <Route path="/*" element={<Errors />} />
    </Routes>
  );
};

export default index;