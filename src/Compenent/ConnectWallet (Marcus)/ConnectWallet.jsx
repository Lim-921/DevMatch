import React, { useEffect, useState } from "react";
import "./ConnectWallet.css"; // Ensure this file includes necessary styles
import { toast } from "react-toastify";

const CreateWalletModal = ({ onSubmit, onClose, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ic, setIc] = useState("");
  const [walletName, setWalletName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [icFront, setIcFront] = useState(null);
  const [icBack, setIcBack] = useState(null);
  const [facePhoto, setFacePhoto] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    // Disable scrolling on the background when the modal is open
    document.body.classList.add("create-wallet-no-scroll");

    return () => {
      // Re-enable scrolling when the modal is closed
      document.body.classList.remove("create-wallet-no-scroll");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.");
      return;
    }

    const formData = {
      name,
      email,
      ic,
      walletName,
      password,
      icFront,
      icBack,
      facePhoto,
    };

    onSubmit(formData);
  };

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="create-wallet-modal-overlay">
      <div className="create-wallet-modal-content">
        <h2>Create Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="create-wallet-form-container">
            <div className="create-wallet-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="ic">IC</label>
              <input
                type="text"
                id="ic"
                value={ic}
                onChange={(e) => setIc(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="walletName">Wallet Name</label>
              <input
                type="text"
                id="walletName"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="create-wallet-form-group show-password-group">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="icFront">Upload IC (Front)</label>
              <input
                type="file"
                id="icFront"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setIcFront)}
                required
              />
            </div>
            <div className="create-wallet-form-group">
              <label htmlFor="icBack">Upload IC (Back)</label>
              <input
                type="file"
                id="icBack"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setIcBack)}
                required
              />
            </div>
            <div className="create-wallet-form-group full-width">
              <label htmlFor="facePhoto">
                Current Face Photo (For Identification)
              </label>
              <input
                type="file"
                id="facePhoto"
                accept="image/*"
                onChange={(e) => handleFileChange(e, setFacePhoto)}
                required
              />
            </div>
          </div>
          <div className="create-wallet-modal-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Create</button>
          </div>
        </form>
        <p className="create-wallet-switch-text">
          Already a user?{" "}
          <span className="create-wallet-login-link" onClick={onSwitchToLogin}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateWalletModal;
