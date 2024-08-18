import React from 'react';
import { Link } from 'react-router-dom'; 
import './BantuanProject.css';

const BantuanProject = () => {
    
    const voteScore = 1024;

    return (
        <div>
            <div className="project-info">
                <div className="bantuan-title">
                    <h1>Rahmah Cash Contribution (STR)</h1>
                    <hr className='divider'></hr>
                </div>

                <div className='bantuan-contents'>
                    <div className='project-left'>
                        <div className='project-about'>
                            <p>Bantuan SARA 2024 (Sumbangan Asas Rahmah) is a targeted subsidy program introduced in the 2024 Budget to support low-income individuals and families. The program aims to improve the economic status of vulnerable groups and ensure fairness in the distribution of aid.</p>
                            <p>Key Details:</p>
                            <ul>
                                <li><strong>Amount:</strong> Each eligible recipient will receive RM100 per month for a duration of 12 months, which can be used to purchase essential goods at participating retail stores using their MyKad. For recipients in Sabah, Sarawak, and Labuan, the aid is provided in two payments of RM600 or RM300 annually.</li>
                                <li><strong>Implementation Date:</strong> The program will begin in stages starting from January 22, 2024.</li>
                                <li><strong>Categories and Aid Levels:</strong>
                                    <ul>
                                        <li>Low-Income Households and Elderly without Spouse: RM1,200 annually (increased from RM600 in 2023).</li>
                                        <li>Singles: RM600 annually.</li>
                                        <li>Non-Ekasih STR Recipients:
                                            <ul>
                                                <li>Households: RM300 per year.</li>
                                                <li>Elderly without Spouse and Singles: RM150 per year.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <p>This initiative is part of the government's broader efforts to enhance the well-being of its citizens through targeted financial assistance and support.</p>
                        </div>
                    </div>

                    <div className='project-right'>
                        <div className='project-voting-box'>
                            <div className='voting-box-content'>
                                <div className='eligible'>Eligible Requirements</div>
                                <div className='requirements'>
                                    <ul>
                                        <li>Malaysian citizen or permanent resident.</li>
                                        <li>Household income below the government’s set threshold.</li>
                                        <li>Age and family status criteria (e.g., elderly, single parents, low-income families).</li>
                                        <li>Proof of income and residency required.</li>
                                        <li>No significant other financial assistance may be needed.</li>
                                    </ul>
                                </div>
                                <Link to="/apply">
                                    <button className='apply-now-button'>Apply Now</button> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BantuanProject;
