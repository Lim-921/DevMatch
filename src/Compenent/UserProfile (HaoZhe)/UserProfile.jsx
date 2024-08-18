import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import profilePic from "../../assets/ProfilePicture.png";
import verifiedIcon from "../../assets/verifiedlogo.png";
import qrCodeImage from "../../assets/QRCode.png";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div className="notification">
      <div className="notification-content">
        <span className="notification-icon">&#10003;</span>
        <span>{message}</span>
        <button className="notification-close-btn" onClick={onClose}>
          &#10005;
        </button>
      </div>
      <div className="notification-progress-bar"></div>
    </div>
  );
};

const UserProfile = () => {
  const [showPopup, setShowPopup] = useState(null); 
  const [mintAmount, setMintAmount] = useState(""); 
  const [burnAmount, setBurnAmount] = useState(""); 
  const [balance, setBalance] = useState(null); 
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const navigate = useNavigate();

  const user = {
    username: "JohnDoe",
    email: "Johndoe@gmail.com",
    ic: "881023884592",
    walletName: "John's Wallet",
    balance: `FA ${balance ? balance : "Loading..."}`,
    avatar: profilePic,
  };

  const handleTopUpClick = () => {
    setShowPopup("topUp");
  };

  const handlePaidClick = () => {
    setShowPopup("paid");
  };

  const handleClosePopup = () => {
    setShowPopup(null);
  };

  const handleCopyWalletAddress = () => {
    navigator.clipboard.writeText(
      "9bLSRHAujxiaMG47LncUoNV4LoU6VyYr1nRwpSAZdu6n"
    );
  };

  const handleMintTokens = async () => {
    try {
      const ownerWalletAddress = "0x09baC4dbeC02f6248Ff63cA7Fd8D3DAa7baEDB66"; 
      const walletAddress = sessionStorage.getItem("walletAddress");
      const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38";

      if (!walletAddress) {
        setNotificationMessage("Please connect your wallet before minting.");
        setShowNotification(true);
        return;
      }

      if (mintAmount <= 0) {
        setNotificationMessage("Please enter a valid amount to mint.");
        setShowNotification(true);
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

      const payload = {
        wallet_address: ownerWalletAddress,
        to: walletAddress,
        amount: mintAmount.toString(),
        contract_address: contractAddress,
        callback_url: import.meta.env.VITE_REDIRECT_URI || "https://postman-echo.com/post",
      };

      console.log("Minting Payload:", payload);

      const response = await fetch(`${apiUrl}/api/token/mint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          client_id: clientId,
          client_secret: clientSecret,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Minting Response status:", response.status);
      console.log("Minting Response body:", responseData);

      if (response.ok) {
        const transactionHash = responseData.result.transactionHash;
        console.log("Minting Transaction Hash:", transactionHash);
        setNotificationMessage(`Successfully minted ${mintAmount} tokens!`);
        setShowNotification(true);
        checkBalance();
      } else {
        setNotificationMessage(`Minting failed: ${responseData.message || "Unknown error"}`);
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Error during minting:", error);
      setNotificationMessage("An error occurred during the minting process.");
      setShowNotification(true);
    }
  };

  const handleBurnTokens = async () => {
    try {
      const ownerWalletAddress = "0x09baC4dbeC02f6248Ff63cA7Fd8D3DAa7baEDB66";
      const walletAddress = sessionStorage.getItem("walletAddress");
      const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38";

      if (!walletAddress) {
        setNotificationMessage("Please connect your wallet before burning.");
        setShowNotification(true);
        return;
      }

      if (burnAmount <= 0) {
        setNotificationMessage("Please enter a valid amount to burn.");
        setShowNotification(true);
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

      const payload = {
        wallet_address: ownerWalletAddress,
        to: walletAddress,
        amount: burnAmount.toString(),
        contract_address: contractAddress,
        callback_url: import.meta.env.VITE_REDIRECT_URI || "https://postman-echo.com/post",
      };

      console.log("Burning Payload:", payload);

      const response = await fetch(`${apiUrl}/api/token/burn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          client_id: clientId,
          client_secret: clientSecret,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Burning Response status:", response.status);
      console.log("Burning Response body:", responseData);

      if (response.ok) {
        const transactionHash = responseData.result.transactionHash;
        console.log("Burning Transaction Hash:", transactionHash);
        setNotificationMessage(`Successfully burned ${burnAmount} tokens!`);
        setShowNotification(true);
        checkBalance();
      } else {
        setNotificationMessage(`Burning failed: ${responseData.message || "Unknown error"}`);
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Error during burning:", error);
      setNotificationMessage("An error occurred during the burning process.");
      setShowNotification(true);
    }
  };

  const checkBalance = async () => {
    try {
      const walletAddress = sessionStorage.getItem("walletAddress");
      const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38";

      if (!walletAddress) {
        setNotificationMessage("Please connect your wallet before checking balance.");
        setShowNotification(true);
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

      const payload = {
        wallet_address: walletAddress,
        contract_address: contractAddress,
      };

      console.log("Checking Balance Payload:", payload);

      const response = await fetch(`${apiUrl}/api/token/balance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          client_id: clientId,
          client_secret: clientSecret,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("Balance Response status:", response.status);
      console.log("Balance Response body:", responseData);

      if (response.ok && responseData.result) {
        setBalance(responseData.result);
        setNotificationMessage(`Token Balance: ${responseData.result}`);
        setShowNotification(true);
      } else {
        setNotificationMessage(`Failed to check balance: ${responseData.message || "Unknown error"}`);
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Error while checking balance:", error);
      setNotificationMessage("An error occurred while checking the balance.");
      setShowNotification(true);
    }
  };

  useEffect(() => {
    checkBalance();
  }, []);

  return (
    <div className="userprofile">
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-details">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="profile-avatar"
            />
            <div className="user-info">
              <h1>
                {user.username}
                <img
                  src={verifiedIcon}
                  alt="Verified Icon"
                  className="verified-icon"
                />
              </h1>
              <p>Email: {user.email}</p>
              <p>IC: {user.ic}</p>
              <p>Wallet: {user.walletName}</p>
            </div>
          </div>
          <div className="profile-balance">
            <h2>Current Balance</h2>
            <p>{user.balance}</p>
            <button className="top-up-btn" onClick={handleTopUpClick}>
              Top-Up
            </button>
            <button className="paid-btn" onClick={handlePaidClick}>
              Pay
            </button>
          </div>
        </div>

        {showPopup && (
          <div
            className={`popup-overlay ${
              showPopup === "topUp" ? "top-up-popup" : "paid-popup"
            }`}
          >
            <div className="popup-content">
              <img src={qrCodeImage} alt="QR Code" className="qr-code" />
              <p>Wallet Address:</p>
              <p className="wallet-address">
                9bLSRHAujxiaMG47LncUoNV4LoU6VyYr1nRwpSAZdu6n
              </p>
              {showPopup === "topUp" && (
                <>
                  <p>Minimum Top-Up Amount: 1 FA (1 MYR)</p>
                  <p>Top Up to - Funding Account</p>
                  <div className="token-action">
                    <input
                      type="number"
                      placeholder="Enter amount to top up"
                      value={mintAmount}
                      onChange={(e) => setMintAmount(e.target.value)}
                      className="amount-input"
                    />
                    <button
                      className="mint-token-btn"
                      onClick={handleMintTokens}
                    >
                      Top Up
                    </button>
                  </div>
                </>
              )}
              {showPopup === "paid" && (
                <>
                  <div className="token-action">
                    <input
                      type="number"
                      placeholder="Enter amount to pay"
                      value={burnAmount}
                      onChange={(e) => setBurnAmount(e.target.value)}
                      className="amount-input"
                    />
                    <button
                      className="burn-token-btn"
                      onClick={handleBurnTokens}
                    >
                      Pay
                    </button>
                  </div>
                </>
              )}
              <div className="popup-buttons">
                <button
                  className="copy-wallet-btn"
                  onClick={handleCopyWalletAddress}
                >
                  Copy
                </button>
                <button className="close-popup-btn" onClick={handleClosePopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="profile-actions">
        <button
          className="logout-btn"
          onClick={() => console.log("LogOut button clicked")}
        >
          LogOut
        </button>
        <button className="back-btn" onClick={() => navigate("/mainpage")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UserProfile;