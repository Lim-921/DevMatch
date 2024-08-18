import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";
import profilePic from "../../assets/ProfilePicture.png";
import verifiedIcon from "../../assets/verifiedlogo.png";
import qrCodeImage from "../../assets/QRCode.png";

const UserProfile = () => {
  const [showPopup, setShowPopup] = useState(null); // Use a single state for popup type
  const [mintAmount, setMintAmount] = useState(""); // State for mint amount
  const [burnAmount, setBurnAmount] = useState(""); // State for burn amount
  const [balance, setBalance] = useState(null); // State for balance
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
      const walletAddress = sessionStorage.getItem("walletAddress");
      const ownerWalletAddress = "0xB3d415ABFAcE59F73A928771bFA332763dbb6a3a";
      const contractAddress = "0x5949bE4986C269B9833C28B7659A2824772b44e7";

      if (!walletAddress) {
        alert("Please connect your wallet before minting.");
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
      const payload = {
        wallet_address: ownerWalletAddress,
        to: walletAddress,
        amount: parseInt(mintAmount), // Use the mintAmount entered by the user
        contract_address: contractAddress,
        callback_url:
          import.meta.env.VITE_REDIRECT_URI ||
          "https://postman-echo.com/post",
      };

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
      console.log("Mint Response:", responseData); // Debugging log
      if (response.ok && responseData.result) {
        alert(`Successfully minted ${mintAmount} tokens!`);
        checkBalance(); // Update balance after minting
      } else {
        alert(`Minting failed: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during minting:", error);
      alert("An error occurred during the minting process.");
    }
  };

  const handleBurnTokens = async () => {
    try {
      const walletAddress = sessionStorage.getItem("walletAddress");
      const contractAddress = "0x5949bE4986C269B9833C28B7659A2824772b44e7";

      if (!walletAddress) {
        alert("Please connect your wallet before burning.");
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
      const payload = {
        wallet_address: walletAddress,
        amount: parseInt(burnAmount), // Use the burnAmount entered by the user
        contract_address: contractAddress,
      };

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
      console.log("Burn Response:", responseData); // Debugging log
      if (response.ok && responseData.result) {
        alert(`Successfully burned ${burnAmount} tokens!`);
        checkBalance(); // Update balance after burning
      } else {
        alert(`Burning failed: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during burning:", error);
      alert("An error occurred during the burning process.");
    }
  };

  const checkBalance = async () => {
    try {
      const walletAddress = sessionStorage.getItem("walletAddress");
      const contractAddress = "0x5949bE4986C269B9833C28B7659A2824772b44e7";

      if (!walletAddress) {
        alert("Please connect your wallet before checking balance.");
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = "9b16ae5638534ae1961fb370f874b6cc"; // Your client ID
      const clientSecret = "sk_9b16ae5638534ae1961fb370f874b6cc"; // Your client secret

      const payload = {
        wallet_address: walletAddress,
        contract_address: contractAddress,
      };

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
      console.log("Balance Response:", responseData); // Debugging log

      if (response.ok && responseData.result) {
        setBalance(responseData.result); // Assuming the result is the balance
        alert(`Token Balance: ${responseData.result}`);
      } else {
        alert(`Failed to check balance: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error while checking balance:", error);
      alert("An error occurred while checking the balance.");
    }
  };

  useEffect(() => {
    checkBalance(); // Check balance on initial load
  }, []);

  return (
    <div className="userprofile">
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
                      placeholder="Enter amount to mint"
                      value={mintAmount}
                      onChange={(e) => setMintAmount(e.target.value)}
                      className="amount-input"
                    />
                    <button
                      className="mint-token-btn"
                      onClick={handleMintTokens}
                    >
                      Mint Tokens
                    </button>
                  </div>
                </>
              )}
              {showPopup === "paid" && (
                <>
                  <div className="token-action">
                    <input
                      type="number"
                      placeholder="Enter amount to burn"
                      value={burnAmount}
                      onChange={(e) => setBurnAmount(e.target.value)}
                      className="amount-input"
                    />
                    <button
                      className="burn-token-btn"
                      onClick={handleBurnTokens}
                    >
                      Burn Tokens
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