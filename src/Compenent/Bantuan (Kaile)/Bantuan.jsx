import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Bantuan.css';
import bantuan_project1 from '../../assets/bantuanProject1.jpg';
import bantuan_project3 from '../../assets/bantuanProject2.jpg';
import bantuan_project2 from '../../assets/bantuanProject3.webp';
import MainNavBar from '../MainNavBar (Marcus)/MainNavBar';

const Bantuan = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialTab = location.state?.activeTab || 'available-financial-aid'; // Default to 'available-financial-aid' if no state

    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleViewMoreClick = () => {
        navigate('/bantuan-project');
    };

    const handleBackToHomeClick = () => {
        navigate('/mainpage'); 
    };

    const historydetails = [
        { id: '001', name: 'Rahmah Cash Contribution / Sumbangan Tunai Rahmah (STR)', applicationDate: '2024-08-01', status: 'Success' },
        { id: '002', name: 'Program Subsidi Upah (Wage Subsidy Program)', applicationDate: '2024-08-05', status: 'Success' },
        { id: '003', name: 'Bantuan SARA 2024 (Sumbangan Asas Rahmah)', applicationDate: '2024-08-10', status: 'Pending' },
    ];

    return (
        <div className='bantuan-page'>
            <MainNavBar />
            <div className='bantuan-navbar'>
                <div
                    className={`nav-item ${activeTab === 'available-financial-aid' ? 'active available-financial-aid-text' : ''}`}
                    onClick={() => setActiveTab('available-financial-aid')}
                >
                    Available Financial Aids
                    <div className='short-line'></div>
                </div>
                <div
                    className={`nav-item ${activeTab === 'History' ? 'active history-text' : ''}`}
                    onClick={() => setActiveTab('History')}
                >
                    History
                    <div className='short-line'></div>
                </div>
            </div>

            <div className='content'>
                {activeTab === 'available-financial-aid' ? (
                    <div className='project-list'>
                        <div className='project-container'>
                            <img src={bantuan_project1} alt='Project 1'/>
                            <h3>Rahmah Cash Contribution / Sumbangan Tunai Rahmah (STR)</h3>
                            <p>Provides financial assistance to Malaysians from low-income (B40) and middle-income (M40) groups.</p>
                            <div className='button-container'>
                                <div className='view-more-button' onClick={handleViewMoreClick}>View More</div>
                            </div>
                        </div>

                        <div className='project-container'>
                            <img src={bantuan_project2} alt='Project 2'/>
                            <h3>Program Subsidi Upah (Wage Subsidy Program)</h3>
                            <p>Support employers in retaining their employees by subsidizing a portion of wages for a set period.</p>
                            <div className='button-container'>
                                <div className='view-more-button'>View More</div>
                            </div>
                        </div>

                        <div className='project-container'>
                            <img src={bantuan_project3} alt='Project 3'/>
                            <h3>Bantuan SARA 2024 (Sumbangan Asas Rahmah)</h3>
                            <p>Provides RM300 per month to eligible veterans and their dependents to help with living costs.</p>
                            <div className='button-container'>
                                <div className='view-more-button' onClick={handleViewMoreClick}>View More</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='history-content'>
                        <div className='history-title'>
                            <div className='title-id'>ID</div>
                            <div className='title-name'>Name</div>
                            <div className='title-date'>Application Date</div>
                            <div className='title-status'>Status</div>
                        </div>
                        {historydetails.map((historydetail) => (
                            <div key={historydetail.id} className='history-item'>
                                <div className='item-id'>{historydetail.id}</div>
                                <div className='item-name'>{historydetail.name}</div>
                                <div className='item-date'>{historydetail.applicationDate}</div>
                                <div className='item-status'>{historydetail.status}</div>
                            </div>
                        ))}
                        <div className='back-to-home-button' onClick={handleBackToHomeClick}>
                            Back to Home
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bantuan;
