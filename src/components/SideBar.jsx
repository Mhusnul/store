import React from "react";
import { useNavigate, useLocation } from "react-router";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const category = [
    "Newarrivals",
    "Shoes",
    "Electronics",
    "Furniture",
    "Others",
  ];

  const currentPath = location.pathname.slice(1).toLowerCase();

  const handleChack = (cat) => {
    const slug = cat.toLowerCase();
    navigate(`/${slug}`);
  };

  return (
    <div className="p-5">
      <div className="h-screen w-3xs">
        <h3 className="bg-gray-200 text-2xl font-bold px-5 py-3 mt-5">
          Categori
        </h3>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4 text-sm">
          <legend className="fieldset-legend">Fashion</legend>
          {category.map((cat) => {
            const slug = cat.toLowerCase();
            return (
              <label key={cat} className="label mb-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-neutral"
                  onChange={() => handleChack(cat)}
                  checked={currentPath === slug}
                />
                {cat}
              </label>
            );
          })}
        </fieldset>
      </div>
    </div>
  );
}

export default SideBar;
