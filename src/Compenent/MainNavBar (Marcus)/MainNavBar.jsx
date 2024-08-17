import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css"; // Use the common CSS
import logo from "../../assets/FundifyLogo.png";

const MainNavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
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

  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <>
      <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
        <RouterLink to="/">
          <img src={logo} alt="Fundify Logo" className="logo" />
        </RouterLink>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/financial-aid">Financial Aid</RouterLink>
          </li>
          <li>
            <RouterLink to="/donate">Donate</RouterLink>
          </li>
          <li>
            <RouterLink to="/vote">Vote</RouterLink>
          </li>
          <li>
            <button className="btn">
              {walletAddress ? truncateAddress(walletAddress) : "Connect Wallet"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavBar;
