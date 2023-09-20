import React from "react";
import Logo from "../assets/m-logo.png";
import { Link } from "react-router-dom";
import { auth, logout } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white flex flex-wrap gap-2 px-2 pb-3 items-center justify-around">
        <Link to="/home">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-[80px]" />
            <p className="font-semibold -ml-4">MartinsGallery</p>
          </div>
        </Link>

        {user ? (
          <Link to="uploadImage">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 hover:shadow-md">
              Upload Images
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-blue-600 text-white px-10 py-2 rounded-full font-medium hover:bg-blue-700 hover:shadow-md">
              Login
            </button>
          </Link>
        )}

        {user ? (
          <button onClick={logout} className="bg-red-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 hover:shadow-md">Logout</button>
        ) : ''}
      </nav>
    </div>
  );
};

export default NavBar;
