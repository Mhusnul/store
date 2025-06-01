import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import NewArivals from "./pages/NewArivals";
import Electronics from "./pages/Electronics";
import Shoes from "./pages/Shoes";
import Furniture from "./pages/Furniture";
import Others from "./pages/Others";
import DetailProduct from "./components/DetailProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/newarrivals" element={<NewArivals />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/furniture" element={<Furniture />} />
      <Route path="/others" element={<Others />} />
      <Route path="/products/:id" element={<DetailProduct />} />
    </Routes>
  );
}

export default App;
