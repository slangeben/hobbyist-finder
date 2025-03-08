import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Email and password cannot be empty!");
      return;
    }

    saveData(email, password);
    navigate('/')
  };

  const saveData = (email, password) => {
    const jsonData = { email, password };
    localStorage.setItem("user", JSON.stringify(jsonData));
  };

  return (
    <div className="container">
      <div className="login-container mx-auto mt-5 p-4 bg-white rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Sign Up</h2>
    

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>          
          <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
