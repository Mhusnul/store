import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Category from "./Category";
import { useCart } from "../context/CartContext";
import { logout } from "../api/auth";

function Navbar() {
  const { cart } = useCart();
  const [isLogin, setIsLogin] = useState(false);

  //logout
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLogin(!!token);
    };

    checkLogin();

    window.addEventListener("login", checkLogin);
    window.addEventListener("logout", checkLogin);

    return () => {
      window.removeEventListener("login", checkLogin);
      window.removeEventListener("logout", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsLogin(false);
    window.dispatchEvent(new Event("logout"));
    navigate("/");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((_, item) => totalItems * item.price, 0);

  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  //search
  const handleSearch = (e) => {
    e.preventDefault();

    if (keyword.trim() !== "") {
      navigate(`/others?q=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div>
      {/* Navbar Mobile - Tampil hanya di layar kecil */}
      <div className="navbar bg-black shadow-sm gap-3 fixed z-10 lg:hidden px-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-neutral text-xl">
            Eazy Shop
          </Link>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered navbar-center"
        />
        {/* Menu Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52 text-white"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLogin ? (
              <>
                <li>
                  <button onClick={() => handleLogout()}> Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Masuk</Link>
                </li>
                <li>
                  <Link to="/register">Daftar</Link>
                </li>
              </>
            )}

            <li>
              <Link to={"/cart"}>
                Cart <span className="badge badge-sm">{totalItems}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar bg-neutral shadow-sm gap-5 fixed z-10 hidden lg:flex ">
        <div className="flex-1">
          <Link to="/" className="btn btn-neutral text-xl">
            Eazy Shop
          </Link>
        </div>
        <form className="input" onSubmit={handleSearch}>
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit"></button>
        </form>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-neutral btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>

                <span className="badge badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{totalItems}</span>
                {cart.map((item) => (
                  <span key={item.price}>{item.title}</span>
                ))}
                <span className="text-red-500"> $ {totalPrice}</span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn btn-neutral btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLogin ? (
          <div>
            <button className="btn" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <div>
              <Link className="btn" to="/login">
                Masuk
              </Link>
            </div>
            <div>
              <a className="btn btn-neutral">Daftar</a>
            </div>
          </>
        )}
      </div>

      <Category />
    </div>
  );
}

export default Navbar;
