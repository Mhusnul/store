import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Furniture() {
  return (
    <>
      <Navbar />
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Furniture" />
      </div>
    </>
  );
}

export default Furniture;
