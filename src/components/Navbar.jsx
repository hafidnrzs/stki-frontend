import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="h-auto w-full bg-[#C9C7C5]">
      {/* Navbar Container */}
      <div className="navbar w-full font-mulish px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Search Bar */}
          <div
            className={`flex items-center w-full transition-all duration-300 ${
              showSearch ? "gap-4" : "justify-between"
            }`}
          >
            <a className="btn btn-ghost text-2xl sm:text-4xl text-red-500">
              Beritaku
            </a>

            {showSearch && (
              <div className="flex items-center flex-grow gap-4">
                <input
                  type="text"
                  placeholder="Apa yang ingin anda baca hari ini?"
                  className="input input-bordered rounded-3xl w-full text-xs lg:text-xl"
                />
                <button className="btn btn-active rounded-full shadow-2xl text-white bg-[#BC1529] hover:bg-[#BC1529]">
                  Cari
                </button>
              </div>
            )}

            {!showSearch && (
              <button
                className="btn btn-ghost text-xl text-white"
                onClick={toggleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="block sm:hidden px-4 py-4">
        <button
          className="btn w-full rounded-full shadow-2xl text-white bg-[#BC1529] hover:bg-[#BC1529]"
          onClick={toggleDropdown}
        >
          <div className="text-2xl font-bold">Menu</div>
        </button>

        {showDropdown && (
          <div className="mt-4 bg-white rounded-lg shadow-lg">
            <Link
              to="/"
              className="block w-full text-left px-4 py-2 bg-[#BC1529] hover:bg-[#BC1529]"
            >
              HOME
            </Link>
            <Link
              to="/category/news"
              className="block w-full text-left px-4 py-2 hover:bg-[#BC1529]"
            >
              NEWS
            </Link>
            <Link
              to="/category/sport"
              className="block w-full text-left px-4 py-2 hover:bg-[#BC1529]"
            >
              SPORT
            </Link>
            <Link
              to="/category/hot"
              className="block w-full text-left px-4 py-2 hover:bg-[#BC1529]"
            >
              HOT
            </Link>
            <Link
              to="/category/lifestyle"
              className="block w-full text-left px-4 py-2 hover:bg-[#BC1529]"
            >
              LIFESTYLE
            </Link>
            <Link
              to="/category/business"
              className="block w-full text-left px-4 py-2 hover:bg-[#BC1529]"
            >
              BUSINESS
            </Link>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-wrap justify-center gap-4 px-4 sm:gap-6 lg:gap-12 py-4">
        <Link
          to="/category/home"
          className="btn rounded-full shadow-2xl w-full sm:w-36 bg-[#BC1529] hover:bg-[#BC1529]"
        >
          HOME
        </Link>
        <Link
          to="/category/news"
          className="btn rounded-full shadow-2xl w-full sm:w-36 hover:bg-[#BC1529]"
        >
          NEWS
        </Link>
        <Link
          to="/category/sport"
          className="btn rounded-full shadow-2xl w-full sm:w-36 hover:bg-[#BC1529]"
        >
          SPORT
        </Link>
        <Link
          to="/category/hot"
          className="btn rounded-full shadow-2xl w-full sm:w-36 hover:bg-[#BC1529]"
        >
          HOT
        </Link>
        <Link
          to="/category/lifestyle"
          className="btn rounded-full shadow-2xl w-full sm:w-36 hover:bg-[#BC1529]"
        >
          LIFESTYLE
        </Link>
        <Link
          to="/category/business"
          className="btn rounded-full shadow-2xl w-full sm:w-36 hover:bg-[#BC1529]"
        >
          BUSINESS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
