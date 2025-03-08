import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Email and password cannot be empty!");
      return;
    }

    saveData(email, password);
    navigate('/interest')
  };

  const saveData = (email, password) => {
    const jsonData = { email, password };
    localStorage.setItem("user", JSON.stringify(jsonData));
  };

  return (
    <div className="container">
      <div className="login-container mx-auto mt-5 p-4 bg-white rounded shadow" style={{ maxWidth: "400px" }}>
        <h2 className="text-center">Log in</h2>
        <p className="signup-link text-center">
          Not a member yet? <a href="/signup">Sign up</a>
        </p>

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
          <div className="forgot-password text-end">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <div className="form-check my-3">
            <input type="checkbox" className="form-check-input" id="keepSignedIn" />
            <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
