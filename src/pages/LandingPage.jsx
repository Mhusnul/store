import Corousel from "../components/Corousel";
import CardPage from "../components/CardPage";
import BrandCorousel from "../components/BrandCorousel";
import CtaCorousel from "../components/CtaCorousel";
import Benner from "../components/Benner";
import CardGender from "../components/CardGender";
import Product from "../components/Product";

function LandingPage() {
  return (
    <>
      <Corousel />
      <CardPage />
      <BrandCorousel />
      <CtaCorousel />
      <Benner />
      <Product filtredByCategory="Shoes" />
      <CardGender />
    </>
  );
}

export default LandingPage;
