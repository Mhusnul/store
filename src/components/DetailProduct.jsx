import React, { useEffect, useState } from "react";
import { getDetailProducts } from "../api/product";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shoes from "../pages/Shoes";
import ProductList from "./Product";

function DetailProduct() {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetailProduct = async () => {
    try {
      const data = await getDetailProducts(id);
      setDetailProduct(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 px-10 py-1 grid md:grid-cols-2 gap-5">
        <div className="flex gap-2 items-center">
          <div className="">
            {detailProduct.images.map((img) => (
              <a href={`#${img}`}>
                <img src={img} className=" mt-1  shadow-2xl hover:border-2" />
              </a>
            ))}
          </div>
          <div>
            <div className="carousel">
              {detailProduct.images.map((img) => (
                <div id={img} className="carousel-item w-full">
                  <img src={img} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 bg-white mb-5">
          <div className="p-5">
            <h1 className="text-rose-500 font-bold text-3xl">
              {detailProduct.category.name.toUpperCase()}
            </h1>
            <h1 className="font-bold text-4xl">{detailProduct.title}</h1>
            <p className="mt-4 text-gray-500 text-xl">
              {detailProduct.description.slice(0, 40)}
            </p>
            <p className="text-red-500 font-bold mt-2 text-3xl">
              ${detailProduct.price}
            </p>
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star" aria-label="2 star"></div>
              <div
                className="mask mask-star"
                aria-label="3 star"
                aria-current="true"
              ></div>
              <div className="mask mask-star" aria-label="4 star"></div>
              <div className="mask mask-star" aria-label="5 star"></div>
            </div>

            {/* Ukuran */}
            <div className="flex justify-between mt-5 px-3">
              <h1 className="font-bold text-xl">Ukuran</h1>
              <a href="" className="text-blue-500 underline">
                Panduan Ukuran
              </a>
            </div>
            <div className="grid  grid-cols-2 md:grid-cols-3 ">
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
              <button className="font-bold px-10 py-2 border hover:border-2 m-2">
                US 4
              </button>
            </div>

            <div>
              <h1 className="font-bold text-xl">Kuantitas</h1>
            </div>

            <div className="gap-2 flex">
              <input type="number" value="1" className="border p-2" />
              <button className="btn btn-neutral px-10 hover:bg-white hover:text-black">
                Neutral
              </button>
              <button className="btn btn-outline px-10 hover:btn-neutral">
                Default
              </button>
            </div>
          </div>
        </div>
      </section>
      <ProductList />
      <Footer />
    </>
  );
}

export default DetailProduct;
