import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

function NewArivals() {
  return (
    <>
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Electronic" />
      </div>
    </>
  );
}

export default NewArivals;
