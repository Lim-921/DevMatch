import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import project3 from '../../assets/voteproject3.jpeg';
import user_icon from '../../assets/user.png';
import './BantuanProject.css';

const BantuanProject = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [voteScore, setVoteScore] = useState(1024);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleVoteClick = () => {
        navigate('/apply'); // Navigate to /apply when the button is clicked
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmVote = () => {
        setVoteScore(voteScore + 1); 
        setIsModalOpen(false); 
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
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>John Smith</div>
                                    <div className='comment-text'>I’m excited about the potential improvements to our drainage systems...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>Emily Johnson</div>
                                    <div className='comment-text'>While I appreciate the effort, I’m concerned about the environmental impact...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>Michael Brown</div>
                                    <div className='comment-text'>It would be great to see more detailed plans about the project’s timeline and budget...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>Sarah Davis</div>
                                    <div className='comment-text'>This project could really enhance our community's resilience to flooding...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            <div className='comment'>
                                <img src={user_icon} alt="User" />
                                <div className='comment-content'>
                                    <div className='comment-username'>David Wilson</div>
                                    <div className='comment-text'>I’m glad to see flood mitigation being prioritized...</div>
                                </div>
                                <div className='comment-divider'></div>
                            </div>
                            
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
                                <button className='vote-now-button' onClick={handleVoteClick}>Vote Now</button> {/* Update here */}
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

                        <button className="confirm-vote-button" onClick={handleConfirmVote}>Apply Now</button> 
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default BantuanProject;
