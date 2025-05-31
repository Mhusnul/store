import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Electronics() {
  return (
    <>
      <Navbar />
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Electronics" />
      </div>
    </>
  );
}

export default Electronics;
