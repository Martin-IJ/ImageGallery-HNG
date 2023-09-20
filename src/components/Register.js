import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/login");
  }, [user, loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="h-[100%] max-w-[600px] w-[100%] m-auto">
      <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center text-start">
        <div className="w-[70%] mt-10">
          <h1 className="text-3xl text-main-color text-center mb-10">
            Create an account
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div>
            <label className="ms-3 text-lg" htmlFor="name">
              Full name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="mb-3 mt-1 px-4 py-4 rounded-full w-full border border-gray-400 drop-shadow-md"
            />
            </div>
            <div>
            <label className="ms-3 text-lg" htmlFor="email">
              Your email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              className="mb-3 mt-1 px-4 py-4 rounded-full w-full border border-gray-400 drop-shadow-md"
            />
            </div>
            <div>
            <label className="ms-3 text-lg" htmlFor="password">
              Choose a password
            </label>
            <div className="flex items-center bg-white rounded-full border border-gray-400 drop-shadow-md px-4 py-2 mb-3 mt-1">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="flex-1 bg-transparent border-none outline-none py-2"
              />
              <button onClick={toggleVisibility}>
                {passwordVisible ? <BsEye /> : <BsEyeSlash />}
              </button>
            </div>
            </div>
            <button
              className="my-3 bg-blue-500 hover:bg-blue-700 text-white px-3 py-4 rounded-full w-full"
              type="submit"
              onClick={register}
            >
              Sign up
            </button>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-main-color font-bold cursor-pointer"
            >
              Login
            </Link>
            <br />
            <span
              className="cursor-pointer group text-main-color w-fit m-auto"
              onClick={signInWithGoogle}
            >
              Register with Google
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
