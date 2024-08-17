import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
import { toast } from "react-toastify"; 

const LoginModal = ({ onClose, onLogin }) => {
  const [ic, setIc] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const hardcodedIC = "0350251";
    const hardcodedPassword = "123123";
    const walletAddress = "0x7e410c9e012F17Ce78939D4A714D76e873010fdE";

    if (ic === hardcodedIC && password === hardcodedPassword) {
      onLogin(walletAddress);
      toast.success("Logged in successfully!"); // Ensure this is correctly placed
      onClose();
      navigate("/mainpage"); // Redirect to the mainpage
    } else {
      toast.error("Incorrect IC number or password. Please try again.");
    }
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="ic">IC Number</label>
            <input
              type="text"
              id="ic"
              value={ic}
              onChange={(e) => setIc(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
