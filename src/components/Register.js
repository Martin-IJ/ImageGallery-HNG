import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../Firebase";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
    } else {
      registerWithEmailAndPassword(name, email, password);
    }
  };

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className="register__btn" onClick={handleRegister}>
          Register
        </button>
        {!user && (
          <button
            className="register__btn register__google"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
        )}
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Register;
