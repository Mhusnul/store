import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function Others() {
  return (
    <>
      <Navbar />
      <div className="flex pt-15">
        <SideBar />
        <Product />
      </div>
    </>
  );
}

export default Others;
