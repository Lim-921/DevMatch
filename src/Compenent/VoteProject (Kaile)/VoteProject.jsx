import React, { useState } from 'react';
import project3 from '../../assets/voteproject3.jpeg';
import user_icon from '../../assets/user.png';
import './VoteProject.css';
import { toast } from 'react-toastify';

const VoteProject = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [voteScore, setVoteScore] = useState(1024);
    const [isVoteAvailable, setIsVoteAvailable] = useState(true);
    const [donationAmount, setDonationAmount] = useState("");
    const [mintAmount, setMintAmount] = useState(""); // State for minting amount
    const [burnAmount, setBurnAmount] = useState(""); // State for burning amount

    const handleVoteClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmVote = async () => {
        try {
            const walletAddress = sessionStorage.getItem("walletAddress");
            const organizationAddress = "0xB2D2b53145e451D293eCCCb5324BB7f0CE5d0d56"; // Replace with actual organization address
            const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38"; // Replace with your contract address
    
            if (!walletAddress) {
                toast.error("Please connect your wallet before donating.");
                return;
            }
    
            if (donationAmount <= 0) {
                toast.error("Please enter a valid donation amount.");
                return;
            }
    
            const apiUrl = import.meta.env.VITE_API_URL;
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    
            const payload = {
                wallet_address: walletAddress,
                to: organizationAddress,
                amount: donationAmount,
                contract_address: contractAddress,
                callback_url: import.meta.env.VITE_REDIRECT_URI || "https://postman-echo.com/post?"
            };
    
            console.log("Payload:", payload);
    
            const response = await fetch(`${apiUrl}/api/token/token-transfer`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "client_id": clientId,
                    "client_secret": clientSecret
                },
                body: JSON.stringify(payload)
            });
    
            const responseData = await response.json(); // Only read the body once
    
            console.log("Response status:", response.status);
            console.log("Response body:", responseData);
    
            if (response.ok) {
                const transactionHash = responseData.result.transactionHash;
                console.log("Transaction Hash:", transactionHash); // Log the transaction hash
                toast.success("Donation successful!");
                setVoteScore(voteScore + 1);
                setIsVoteAvailable(false);
            } else {
                toast.error(`Donation failed: ${responseData.message}`);
            }
        } catch (error) {
            console.error("An error occurred during the donation process:", error);
            toast.error("An error occurred during the donation process.");
        } finally {
            setIsModalOpen(false);
        }
    };

    // Function to handle minting tokens
    const handleMintTokens = async () => {
        try {
            const ownerWalletAddress = "0x09baC4dbeC02f6248Ff63cA7Fd8D3DAa7baEDB66"; // The owner wallet address
            const walletAddress = sessionStorage.getItem("walletAddress");
            const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38"; // Replace with your contract address
    
            if (!walletAddress) {
                toast.error("Please connect your wallet before minting.");
                return;
            }

            if (mintAmount <= 0) {
                toast.error("Please enter a valid amount to mint.");
                return;
            }

            const apiUrl = import.meta.env.VITE_API_URL;
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

            const payload = {
                wallet_address: ownerWalletAddress, // Use the owner wallet address
                to: walletAddress,             // Mint to the current wallet
                amount: mintAmount,
                contract_address: contractAddress,
                callback_url: import.meta.env.VITE_REDIRECT_URI || "https://postman-echo.com/post?"
            };

            console.log("Minting Payload:", payload);

            const response = await fetch(`${apiUrl}/api/token/mint`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "client_id": clientId,
                    "client_secret": clientSecret
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json(); // Only read the body once

            console.log("Minting Response status:", response.status);
            console.log("Minting Response body:", responseData);

            if (response.ok) {
                const transactionHash = responseData.result.transactionHash;
                console.log("Minting Transaction Hash:", transactionHash); // Log the transaction hash
                toast.success(`Minted ${mintAmount} tokens successfully!`);
            } else {
                toast.error(`Minting failed: ${responseData.message}`);
            }
        } catch (error) {
            console.error("An error occurred during the minting process:", error);
            toast.error("An error occurred during the minting process.");
        }
    };

    // New function to handle burning tokens
    const handleBurnTokens = async () => {
        try {
            const ownerWalletAddress = "0x09baC4dbeC02f6248Ff63cA7Fd8D3DAa7baEDB66";
            const walletAddress = sessionStorage.getItem("walletAddress");
            const contractAddress = "0x68402ba2FF52D05F4b3fE5EbeBF9D8Fa4a05Aa38"; // Replace with your contract address

            if (!walletAddress) {
                toast.error("Please connect your wallet before burning tokens.");
                return;
            }

            if (burnAmount <= 0) {
                toast.error("Please enter a valid amount to burn.");
                return;
            }

            const apiUrl = import.meta.env.VITE_API_URL;
            const clientId = import.meta.env.VITE_CLIENT_ID;
            const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

            const payload = {
                wallet_address: ownerWalletAddress,
                to: walletAddress,  // Address where tokens are being burned from
                amount: burnAmount,
                contract_address: contractAddress,
                callback_url: import.meta.env.VITE_REDIRECT_URI || "https://postman-echo.com/post?"
            };

            console.log("Burning Payload:", payload);

            const response = await fetch(`${apiUrl}/api/token/burn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "client_id": clientId,
                    "client_secret": clientSecret
                },
                body: JSON.stringify(payload)
            });

            const responseData = await response.json(); // Only read the body once

            console.log("Burning Response status:", response.status);
            console.log("Burning Response body:", responseData);

            if (response.ok) {
                const transactionHash = responseData.result.transactionHash;
                console.log("Burning Transaction Hash:", transactionHash); // Log the transaction hash
                toast.success(`Burned ${burnAmount} tokens successfully!`);
            } else {
                toast.error(`Burning failed: ${responseData.message}`);
            }
        } catch (error) {
            console.error("An error occurred during the burning process:", error);
            toast.error("An error occurred during the burning process.");
        }
    };

    return (
        <div>
            <div className="project-info">
                <div className="image-container">
                    <img src={project3} alt="Flood Mitigation Projects" />
                    <h1>Flood Mitigation Projects</h1>
                </div>

                <div className='vote-contents'>
                    <div className='project-left'>
                        <div className='project-navbar'>
                            <div
                                className={`nav-item ${activeTab === 'about' ? 'active about-text' : ''}`}
                                onClick={() => setActiveTab('about')}
                            >
                                About
                                <div className='short-line'></div>
                            </div>
                            <div
                                className={`nav-item ${activeTab === 'comments' ? 'active comments-text' : ''}`}
                                onClick={() => setActiveTab('comments')}
                            >
                                Comments
                                <div className='short-line'></div>
                            </div>
                        </div>

                        <div className={`project-about ${activeTab === 'about' ? 'active' : 'inactive'}`}>
                            <p>In 2024, Malaysia is undertaking a series of flood mitigation projects under the 12th Malaysia Plan, with an allocation of RM22 billion. These projects are designed to protect communities, especially in high-risk areas such as Kelantan and Terengganu, where monsoon floods frequently cause significant damage. </p>
                            <p>Key components of these projects include:</p>
                            <ul>
                                <li><strong>Sungai Pahang Integrated River Basin Development:</strong> This project focuses on improving river management and flood defenses along the Sungai Pahang. It includes the construction of flood barriers and the upgrade of existing drainage systems.</li>
                                <li><strong>Sungai Langat Phase 2:</strong> Aimed at reducing flood risks in the Klang Valley, this phase involves extensive infrastructure improvements to enhance the region's flood management capabilities.</li>
                                <li><strong>Sungai Kelantan Integrated River Basin Phase 2:</strong> This project is crucial for Kelantan, a state that is often severely affected by monsoon floods. The initiative involves constructing new flood barriers and reinforcing existing structures to protect local communities.</li>
                                <li><strong>Sungai Golok Project (Kelantan):</strong> With an investment of RM656 million, this project is being executed in phases, focusing on providing long-term flood protection for Kelantan. Phase 1 is 71% complete, with expected completion by mid-2024. The project includes collaborations with international experts to implement advanced flood control technologies and optimize costs.</li>
                            </ul>
                            <p>These projects represent a comprehensive effort by the Malaysian government to reduce flood risks and ensure the safety and well-being of low-income families and other vulnerable communities across the country.</p>
                        </div>

                        <div className={`project-comments ${activeTab === 'comments' ? 'active' : 'inactive'}`}>
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>Jane Doe</div>
                                    <div className='comment-text'>This project is really important for our community...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            {/* Add more comments as needed */}
                        </div>
                    </div>

                    <div className='project-right'>
                        <div className='project-voting-box'>
                            <div className='voting-box-content'>
                                <div className='vote-item'>
                                    <div className='vote-item-title'>Fund Collected:</div>
                                    <div className='vote-item-detail'>USDT 10,000</div>
                                </div>
                                <div className='vote-item'>
                                    <div className='vote-item-title'>Estimation Start Date:</div>
                                    <div className='vote-item-detail'>01/04/2025</div>
                                </div>
                                <div className='vote-item'>
                                    <div className='vote-item-title'>No. of Supporters:</div>
                                    <div className='vote-item-detail'>{voteScore}</div>
                                </div>
                                {isVoteAvailable && (
                                    <button className='vote-now-button' onClick={handleVoteClick}>Donate Now</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        
                        <div className="modal-header">
                            <img src={project3} className="modal-image" alt="Project"></img>
                            <h2 className="modal-title">Flood Mitigation Projects</h2>
                        </div>

                        <p className="comment-prompt">Leave your comment on this project:</p>
                        <textarea className="comment-box" placeholder="Type your comment ..."></textarea>

                        {/* Add a field for specifying the donation amount */}
                        <input 
                            type="number" 
                            className="donation-amount-input" 
                            placeholder="Enter donation amount" 
                            value={donationAmount} 
                            onChange={(e) => setDonationAmount(e.target.value)} 
                        />

                        <button className="confirm-vote-button" onClick={handleConfirmVote}>Confirm Vote</button> 
                        
                    </div>
                </div>
            )}

            {/* Minting section */}
            <div className="mint-section">
                <h3>Mint Tokens</h3>
                <input 
                    type="number" 
                    className="mint-amount-input" 
                    placeholder="Enter amount to mint" 
                    value={mintAmount} 
                    onChange={(e) => setMintAmount(e.target.value)} 
                />
                <button className="mint-tokens-button" onClick={handleMintTokens}>Mint Tokens</button>
            </div>

            {/* Burning section */}
            <div className="burn-section">
                <h3>Burn Tokens</h3>
                <input 
                    type="number" 
                    className="burn-amount-input" 
                    placeholder="Enter amount to burn" 
                    value={burnAmount} 
                    onChange={(e) => setBurnAmount(e.target.value)} 
                />
                <button className="burn-tokens-button" onClick={handleBurnTokens}>Burn Tokens</button>
            </div>

        </div>
    );
};

export default VoteProject;
