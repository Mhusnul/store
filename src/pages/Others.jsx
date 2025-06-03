import SideBar from "../components/SideBar";
import Product from "../components/Product";
import { useSearchParams } from "react-router";

function Others() {
  const [searchParams] = useSearchParams();
  const searchTrem = searchParams.get("q") || "";

  return (
    <>
      <div className="flex pt-15">
        <SideBar />
        <Product searchTerm={searchTrem} />
      </div>
    </>
  );
}

export default Others;
