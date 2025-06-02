import { Link } from "react-router";

function Category() {
  return (
    <div className="pt-15">
      <div className="bg-black text-white font-bold px-10 py-2 text-center lg:text-end  ">
        <Link
          className="hover:cursor-pointer mx-5 hover:text-red-500"
          to={"/newarrivals"}
        >
          New Arrivals
        </Link>
        <Link
          className="hover:cursor-pointer mx-5 hover:text-red-500"
          to={"/shoes"}
        >
          Shoes
        </Link>
        <Link
          className="hover:cursor-pointer mx-5 hover:text-red-500"
          to={"/electronics"}
        >
          Electronic
        </Link>
        <Link
          className="hover:cursor-pointer mx-5 hover:text-red-500"
          to={"/furniture"}
        >
          Furniture
        </Link>
        <Link
          className="hover:cursor-pointer mx-5 hover:text-red-500"
          to={"/others"}
        >
          Otheres
        </Link>
      </div>
    </div>
  );
}

export default Category;
