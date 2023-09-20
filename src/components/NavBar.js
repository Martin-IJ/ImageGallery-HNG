import React from "react";
import Logo from "../assets/m-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white flex flex-wrap gap-3 px-2 items-center justify-around">
        <Link to='/'>
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-[80px]" />
          <p className="font-semibold -ml-4">MartinsGallery</p>
        </div>
        </Link>

        <Link to='uploadImage'>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 hover:shadow-md">
            Upload Images
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
