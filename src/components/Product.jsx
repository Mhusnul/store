import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/product";
import { useNavigate } from "react-router";

const ProductList = ({ filtredByCategory, searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

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

      if (searchTerm) {
        filtred = filtred.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
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
  }, [filtredByCategory, searchTerm]);

  //paginated
  const page = 8;

  const paginated = products.slice(
    currentPage * page,
    currentPage * page + page
  );

  const totalPage = Math.ceil(products.length / 8);

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
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  ">
        {paginated.map((product) => (
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
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="btn btn-sm btn-neutral"
                >
                  Lihat Detail
                </button>
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
      <div className="flex justify-center gap-4 my-3">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-7 py-2 btn btn-neutral hover:text-red-500"
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <span>
          {currentPage + 1} of {totalPage}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-7 py-2 btn btn-neutral hover:text-red-500"
          disabled={currentPage === totalPage - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProductList;
