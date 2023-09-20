import React, {useEffect} from "react";
import ImageCard from "./ImageCard";
import BannerImg from "../assets/dogImg.jpeg";
import Search from "./Search";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);
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
