import React from "react";
import "./SignOut.css";

const SignOutModal = ({ onClose, onSignOut }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Out</h2>
        <p>Are you sure you want to sign out?</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onSignOut}>Yes, Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
