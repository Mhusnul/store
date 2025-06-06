import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Shoes() {
  return (
    <>
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Shoes" />
      </div>
    </>
  );
}

export default Shoes;
