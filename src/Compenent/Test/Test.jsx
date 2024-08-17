"use client";
import React, { useState } from "react";
import { ethers } from "ethers";

const Test = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(""); // To show success or failure
  const senderAddress = "0xB3d415ABFAcE59F73A928771bFA332763dbb6a3a";
  const contractAddress = "0x43D1AFD3c2936f3c5d7fCeC6E41C996d2BFeB2a6";
  const amount = ethers.utils.parseUnits("2000", 18); // Assuming token has 18 decimals

  const handleMintToken = async (to) => {
    try {
      // Check if Ethereum provider is available
      if (!window.ethereum) {
        setStatus("Failed: Ethereum provider not found. Install MetaMask or another wallet.");
        return;
      }

      // Validate recipient address
      if (!ethers.utils.isAddress(to)) {
        setStatus("Failed: Invalid recipient address.");
        return;
      }

      // Connect to Ethereum provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Prompt user to connect wallet
      const signer = provider.getSigner();

      // Define contract interaction
      const contract = new ethers.Contract(
        contractAddress,
        [
          "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
        ],
        signer
      );

      // Send transaction
      const transaction = await contract.transferFrom(senderAddress, to, amount);
      await transaction.wait(); // Wait for the transaction to be confirmed

      // Success message
      setStatus("Success: 2000 tokens sent successfully!");
    } catch (error) {
      // Failure message
      if (error.code === 4001) {
        setStatus("Failed: User rejected transaction.");
      } else {
        setStatus(`Failed: ${error.message}`);
      }
    } finally {
      setIsModalOpen(false); // Close modal after transaction
    }
  };

  const openModal = () => {
    setStatus(""); // Reset status message
    setIsModalOpen(true);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Mint 2000 Tokens
      </button>

      {isModalOpen && (
        <MintTokenModal
          onSubmit={handleMintToken}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {status && (
        <div className={`mt-4 p-2 text-center ${status.startsWith("Success") ? "text-green-600" : "text-red-600"}`}>
          {status}
        </div>
      )}
    </div>
  );
};

const MintTokenModal = ({ onSubmit, onClose }) => {
  const [to, setTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(to);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Mint Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="to" className="block mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Mint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
