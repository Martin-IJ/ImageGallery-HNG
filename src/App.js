import React from "react";
import "./App.css";
import DropBox from "./components/DropBox";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { SkeletonTheme } from "react-loading-skeleton";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="uploadImage" element={<DropBox />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<Reset />} />
        </Routes>
      </SkeletonTheme>
    </div>
  );
}

export default App;
