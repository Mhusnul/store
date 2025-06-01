import React from "react";
import Navbar from "../components/Navbar";
import Corousel from "../components/Corousel";
import CardPage from "../components/CardPage";
import BrandCorousel from "../components/BrandCorousel";
import CtaCorousel from "../components/CtaCorousel";
import Benner from "../components/Benner";
import CardGender from "../components/CardGender";
import Footer from "../components/Footer";
import Product from "../components/Product";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Corousel />
      <CardPage />
      <BrandCorousel />
      <CtaCorousel />
      <Benner />
      <Product filtredByCategory="Shoes" />
      <CardGender />
      <Footer />
    </>
  );
}

export default LandingPage;
