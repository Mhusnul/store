import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";

const ProductList = ({ filtredByCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();

      let filtred = data;
      if (filtredByCategory) {
        filtred = filtred.filter(
          (p) =>
            p.category.name.toLowerCase() === filtredByCategory.toLowerCase()
        );
      }

      setProducts(filtred);
    } catch (error) {
      console.error("Gagal memuat produk:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Tampilkan skeleton jika loading
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="card w-full bg-base-100 shadow-md animate-pulse"
          >
            <div className="h-48 bg-gray-300 rounded-t"></div>
            <div className="card-body space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Tampilkan produk
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  ">
      {products.map((product) => (
        <div
          key={product.id}
          className="card w-full bg-base-100 shadow-md hover:shadow-lg transition"
        >
          <figure className="h-48">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-base line-clamp-1">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
            <div className="card-actions mt-4 justify-between items-center">
              <span className="text-red-500 font-semibold">
                ${product.price}
              </span>
              <button className="btn btn-sm btn-neutral">Lihat Detail</button>
            </div>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
