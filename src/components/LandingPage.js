import React from "react";
import Img from "../assets/beach_day.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hidden w-[50%] md:flex items-end h-screen">
        <img src={Img} alt="" />
      </div>

      <div className="relative h-full shadow-2xl md:w-[50%] isolate signin-cont text-white text-center py-12 px-4 lg:px-24 flex flex-col justify-between overflow-hidden">
        <h1 className="text-xl font-semibold text-black mt-12">
          Welcome to <span className="text-main-color">Martins Gallery</span> 👋🏻
        </h1>
        <div className="z-20">
          <p className="text-[5rem] leading-[1] w-[400px] font-bold text-start text-black">
            Home of{" "}
            <span className="text-[#3874BF] drop-shadow-md">Beautiful</span>{" "}
            Images
          </p>
          <Link to="/login">
            <button className="bg-[#3874BF] text-white w-full rounded-full mt-5 p-4 font-semibold">
              Get Started
            </button>
          </Link>
        </div>
        {/* <img src={Img} alt="" className='absolute mix-blend-normal w-full top-20 left-0 -z-10 opacity-50' /> */}
        <div className="w-[130px] h-[130px] rounded-full bg-[#3874BF] absolute -top-10 -left-10 -z-10"></div>
        <div className="w-[180px] h-[180px] opacity-30 rounded-full bg-[#3874BF] absolute -top-10 -left-10 -z-10"></div>
        <div className="w-[130px] h-[130px] rounded-full bg-[#3874BF] absolute -bottom-28 -right-10 -z-10"></div>
        <div className="w-[180px] h-[180px] opacity-30 rounded-full bg-[#3874BF] absolute -bottom-28 -right-10 -z-10"></div>
      </div>
    </div>
  );
};

export default LandingPage;
