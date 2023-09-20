import React from "react";
import ImageCard from "./ImageCard";
import BannerImg from "../assets/dogImg.jpeg";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${BannerImg})` }}
        className="h-[70vh] bg-cover bg-center flex px-5 mt-16"
      >
        <Search />
      </div>
      <ImageCard />
    </div>
  );
};

export default Home;
