import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar-common.css"; // Use the common CSS
import logo from "../../assets/FundifyLogo.png";
import CreateWalletModal from "../ConnectWallet (Marcus)/ConnectWallet";
import LoginModal from "../Login (Marcus)/Login";
import SignOutModal from "../SignOut (Marcus)/SignOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedWalletAddress = sessionStorage.getItem("walletAddress");
    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
    }
  }, []);

  const openModal = () => {
    if (!walletAddress) {
      setIsModalOpen(true);
    } else {
      setIsSignOutModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoginModalOpen(false);
    setIsSignOutModalOpen(false);
  };

  const switchToLogin = () => {
    setIsModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleLogin = (walletAddress) => {
    setWalletAddress(walletAddress);
    sessionStorage.setItem("walletAddress", walletAddress);
    closeModal(); // Close the modal after login
  };

  const handleSubmit = async (data) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

      if (!apiUrl || !clientId || !clientSecret) {
        console.error("Environment variables are missing.");
        throw new Error("API URL or client credentials are missing");
      }

      const response = await fetch(`${apiUrl}/api/wallet/create-user`, {
        method: "POST",
        headers: {
          client_id: clientId,
          client_secret: clientSecret,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Error details:", errorDetails);
        throw new Error(
          `Failed to create wallet: ${errorDetails.message || "Unknown error"}`
        );
      }

      const result = await response.json();
      const walletAddress = result.result.wallet.wallet_address;

      sessionStorage.setItem("walletAddress", walletAddress);

      setWalletAddress(walletAddress);

      toast.success(
        `Wallet created successfully! Wallet address: ${walletAddress}`
      );

      closeModal();
      navigate("/mainpage"); // Redirect to the mainpage after wallet creation
    } catch (error) {
      console.error("Error creating wallet:", error);
      toast.error("Failed to create wallet. Please try again.");
    }
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("walletAddress");
    setWalletAddress(null);
    closeModal();
    toast.success("You have successfully signed out.");
    navigate("/"); // Redirect to home after signing out
  };

  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <nav className={`navbar-common ${sticky ? "dark-nav" : "transparent-nav"}`}>
        <RouterLink to="/">
          <img src={logo} alt="Fundify Logo" className="logo" />
        </RouterLink>
        <ul>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink
                to="hero container"
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </ScrollLink>
            ) : (
              <RouterLink to="/">Home</RouterLink>
            )}
          </li>
          <li>
            <ScrollLink
              to="transaction"
              smooth={true}
              offset={-195}
              duration={500}
            >
              Transaction
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="programs"
              smooth={true}
              offset={-250}
              duration={500}
            >
              Program
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} offset={-170} duration={500}>
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={500}
            >
              Trust
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} offset={-200} duration={500}>
              Contact
            </ScrollLink>
          </li>
          <li>
            <button
              className="btn"
              onClick={openModal}
              disabled={isSignOutModalOpen || isModalOpen || isLoginModalOpen}
            >
              {walletAddress
                ? truncateAddress(walletAddress)
                : "Connect Wallet"}
            </button>
          </li>
        </ul>
      </nav>
      {isModalOpen && (
        <CreateWalletModal
          onSubmit={handleSubmit}
          onClose={closeModal}
          onSwitchToLogin={switchToLogin}
        />
      )}
      {isLoginModalOpen && (
        <LoginModal onClose={closeModal} onLogin={handleLogin} />
      )}
      {isSignOutModalOpen && (
        <SignOutModal onClose={closeModal} onSignOut={handleSignOut} />
      )}
      <ToastContainer />
    </>
  );
};

export default NavBar;
