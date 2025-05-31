import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function NewArivals() {
  return (
    <>
      <Navbar />
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Clothes" />
      </div>
    </>
  );
}

export default NewArivals;
