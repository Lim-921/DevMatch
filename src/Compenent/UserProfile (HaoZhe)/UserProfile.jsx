import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserProfile.css';
import profilePic from '../../assets/ProfilePicture.png';
import verifiedIcon from '../../assets/verifiedlogo.png';
import qrCodeImage from '../../assets/QRCode.png';

const UserProfile = () => {
    const [showTopUp, setShowTopUp] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function

    const user = {
      username: "JohnDoe",
      email: "Johndoe@gmail.com",
      ic: "881023884592",
      walletName: "John's Wallet",
      balance: "FA 1,688.00",
      avatar: profilePic,
    };

    const handleTopUpClick = () => {
      setShowTopUp(true);
    };

    const handleClosePopup = () => {
      setShowTopUp(false);
    };

    const handleCopyWalletAddress = () => {
      navigator.clipboard.writeText("9bLSRHAujxiaMG47LncUoNV4LoU6VyYr1nRwpSAZdu6n");
    };

    return (
      <div className="userprofile">
        <div className="profile-container">
          <div className="profile-content">
            {/* Top: User details with profile picture */}
            <div className="profile-details">
              <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
              <div className="user-info">
                <h1>
                  {user.username}
                  <img src={verifiedIcon} alt="Verified Icon" className="verified-icon" />
                </h1>
                <p>Email: {user.email}</p>
                <p>IC: {user.ic}</p>
                <p>Wallet: {user.walletName}</p>
              </div>
            </div>
            {/* Bottom: User balance */}
            <div className="profile-balance">
              <h2>Current Balance</h2>
              <p>{user.balance}</p>
              <button className="top-up-btn" onClick={handleTopUpClick}>Top-Up</button>
            </div>
          </div>

          {showTopUp && (
            <div className="top-up-popup">
              <div className="popup-content">
                <img src={qrCodeImage} alt="QR Code" className="qr-code" />
                <p>Wallet Address:</p>
                <p className="wallet-address">9bLSRHAujxiaMG47LncUoNV4LoU6VyYr1nRwpSAZdu6n</p>
                <p>Minimum Top-Up Amount: 1 FA (1 MYR)</p>
                <p>Top Up to - Funding Account</p>
                <div className="popup-buttons">
                  <button className="copy-wallet-btn" onClick={handleCopyWalletAddress}>Copy</button>
                  <button className="close-popup-btn" onClick={handleClosePopup}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* LogOut and Back Buttons placed directly below the container */}
        <div className="profile-actions">
          <button className="logout-btn" onClick={() => console.log("LogOut button clicked")}>
            LogOut
          </button>
          <button className="back-btn" onClick={() => navigate('/mainpage')}>
            Back
          </button>
        </div>
      </div>
    );
};

export default UserProfile;
