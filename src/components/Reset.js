import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../Firebase";
import "./Reset.css";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleResetClick = async () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      await sendPasswordReset(email);
      alert("Password reset email sent successfully.");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert("An error occurred while sending the password reset email.");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn" onClick={handleResetClick}>
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Reset;
