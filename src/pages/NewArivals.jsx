import SideBar from "../components/SideBar";
import Product from "../components/Product";

function NewArivals() {
  return (
    <>
      <div className="flex pt-15">
        <SideBar />
        <Product filtredByCategory="Clothes" />
      </div>
    </>
  );
}

export default NewArivals;
