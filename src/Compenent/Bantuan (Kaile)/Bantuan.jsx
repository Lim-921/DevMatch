import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bantuan.css';
import bantuan_project1 from '../../assets/bantuanProject1.jpg';
import bantuan_project3 from '../../assets/bantuanProject2.jpg';
import bantuan_project2 from '../../assets/bantuanProject3.webp';

const Bantuan = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('available-financial-aid'); // Default active tab

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleViewMoreClick = () => {
        navigate('/bantuan-project');
    };

    return (
        <div className='bantuan-page'>
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

            <div className='project-list'>
                <div className='project-container'>
                    <img src={bantuan_project1} alt='Project 1'/>
                    <h3>Rahmah Cash Contribution / Sumbangan Tunai Rahmah (STR)</h3>
                    <p>Provides financial assistance to Malaysians from low-income (B40) and middle-income (M40) groups.</p>
                    <div className='button-container'>
                        <div className='view-more-button'>View More</div>
                    </div>
                </div>

                <div className='project-container'>
                    <img src={bantuan_project2} alt='Project 2'/>
                    <h3>rogram Subsidi Upah (Wage Subsidy Program)</h3>
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
        </div>
    );
};

export default Bantuan;
