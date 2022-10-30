import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = (props) => {
  return (
    <Routes>
      <Route path="/friends" element={<h1>Friends</h1>} />
      <Route index element={<h1>Home</h1>} />
    </Routes>
  );
};

export { Router };
