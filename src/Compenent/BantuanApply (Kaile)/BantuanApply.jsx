import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BantuanApply.css';

const BantuanApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    occupation: '',
    income: ''
  });

  const [balance, setBalance] = useState(null); // State to store token balance
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data (for demonstration purposes)
    console.log(formData);

    // Mint 2000 tokens when the form is submitted
    await handleMintTokens();

    // Check balance after minting
    await checkBalance();

    // Navigate to Bantuan component with a state to indicate History view
    navigate('/bantuan', { state: { activeTab: 'History' } });
  };

  const handleMintTokens = async () => {
    try {
      const ownerWalletAddress = "0x09baC4dbeC02f6248Ff63cA7Fd8D3DAa7baEDB66"; // Consistent owner wallet address
      const walletAddress = sessionStorage.getItem('walletAddress');
      const contractAddress = '0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38'; // Consistent contract address

      if (!walletAddress) {
        toast.error('Please connect your wallet before minting.');
        return;
      }

      const mintAmount = 2000;
      const apiUrl = import.meta.env.VITE_API_URL;
      const clientId = import.meta.env.VITE_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

      const payload = {
        wallet_address: ownerWalletAddress,
        to: walletAddress,
        amount: mintAmount.toString(), // Convert amount to string
        contract_address: contractAddress,
        callback_url: import.meta.env.VITE_REDIRECT_URI || 'https://postman-echo.com/post?',
      };

      console.log("Minting Payload:", payload);

      const response = await fetch(`${apiUrl}/api/token/mint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          client_id: clientId,
          client_secret: clientSecret,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success(`Successfully minted 2000 tokens! Transaction Hash: ${responseData.result.transactionHash}`);
      } else {
        toast.error(`Minting failed: ${responseData.message}`);
      }
    } catch (error) {
      console.error('An error occurred during the minting process:', error);
      toast.error('An error occurred during the minting process.');
    }
  };

  const checkBalance = async () => {
    try {
      const walletAddress = sessionStorage.getItem('walletAddress');
      const contractAddress = '0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38'; // Consistent contract address

      if (!walletAddress) {
        toast.error('Please connect your wallet before checking balance.');
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          client_id: clientId,
          client_secret: clientSecret,
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();

      if (response.ok) {
        setBalance(responseData.result); // Assuming the result is the balance
        toast.success(`Token Balance: ${responseData.result}`);
      } else {
        toast.error(`Failed to check balance: ${responseData.message}`);
      }
    } catch (error) {
      console.error('An error occurred while checking the balance:', error);
      toast.error('An error occurred while checking the balance.');
    }
  };

  useEffect(() => {
    // Optionally check balance on component load
    checkBalance();
  }, []);

  return (
    <div className="bantuan-apply">
      <ToastContainer />
      <h1>Application Process</h1>
      {balance !== null && <p>Your Token Balance: {balance}</p>} {/* Display the token balance */}
      <form onSubmit={handleSubmit}>
        <div className="form-category">
          <h2>Personal Info</h2>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Age:
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className="form-category">
          <h2>Financial Status</h2>
          <label>
            Occupation:
            <input 
              type="text" 
              name="occupation" 
              value={formData.occupation} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Current Household Income:
            <input 
              type="number" 
              name="income" 
              value={formData.income} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BantuanApply;
