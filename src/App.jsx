import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import NewArivals from "./pages/NewArivals";
import Electronics from "./pages/Electronics";
import Shoes from "./pages/Shoes";
import Furniture from "./pages/Furniture";
import Others from "./pages/Others";
import DetailProduct from "./components/DetailProduct";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/newarrivals" element={<NewArivals />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/others" element={<Others />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
