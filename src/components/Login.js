import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // trigger loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="h-[100%] max-w-[600px] w-[100%] m-auto text-start">
      <div className="h-[100vh] w-[100%] flex flex-col items-center justify-center">
        <div className="w-[70%] mt-16">
          <h1 className="text-3xl text-main-color text-center mb-10">
            Welcome back!
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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
              <div className="flex items-center bg-white rounded-full border border-gray-400 drop-shadow-md px-5 py-2 mb-3 mt-1">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
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
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-main-color font-bold cursor-pointer"
            >
              Register
            </Link>
            <br />
            <span
              className="cursor-pointer group text-main-color w-fit m-auto"
              onClick={signInWithGoogle}
            >
              Signin with Google
            </span>
            <br />
            <Link to="/reset">Forgot Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
