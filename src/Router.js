import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/friends" element={<h1>Friends</h1>} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export { Router };
