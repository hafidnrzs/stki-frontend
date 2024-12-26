import React from "react";

const Navbar = () => {
  return (
    <div className="h-48 w-full bg-[#C9C7C5]">
      <div className="navbar w-full font-mulish">
        <div className="w-full mt-4">
          <div className="flex w-full justify-between items-center">
            <a className="btn btn-ghost text-4xl text-red-500 justify-start">
              Beritaku
            </a>
            <div className="flex items-center w-full mx-12">
              <input
                type="text"
                placeholder="Apa yang ingin anda baca hari ini?"
                className="input input-bordered rounded-3xl w-full"
              />
            </div>
            <button className="btn btn-active mr-12 w-36 rounded-full shadow-2xl text-white bg-[#BC1529] hover:bg-[#BC1529]">
              Cari
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex space-x-4 justify-center items-center gap-12">
        <button className="btn rounded-full shadow-2xl w-36 bg-[#BC1529] hover:bg-[#BC1529]">
          HOME
        </button>
        <button className="btn rounded-full shadow-2xl w-36 hover:bg-[#BC1529] ">
          NEWS
        </button>
        <button className="btn  rounded-full shadow-2xl w-36 hover:bg-[#BC1529]">
          SPORT
        </button>
        <button className="btn  rounded-full shadow-2xl w-36 hover:bg-[#BC1529]">
          HOT
        </button>
        <button className="btn  rounded-full shadow-2xl w-36 hover:bg-[#BC1529]">
          LIFESTYLE
        </button>
        <button className="btn  rounded-full shadow-2xl w-36 hover:bg-[#BC1529]">
          BUSINESS
        </button>
      </div>
    </div>
  );
};

export default Navbar;
