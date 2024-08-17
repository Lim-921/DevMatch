import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bantuan.css';
import vote_project1 from '../../assets/voteproject1.jpg';
import vote_project2 from '../../assets/voteproject2.jpg';
import vote_project3 from '../../assets/voteproject3.jpeg';

const Bantuan = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Available Financial Aids');

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    const handleViewMoreClick = () => {
        navigate('/bantuan-project');
    };

    return (
        <div>
            
            <div className='bantuan-page'>
                <div className='bantuan-navbar'>
                            <div
                                className={`nav-item ${activeTab === 'available-financial-aid' ? 'active available-financial-aid-text' : ''}`}
                                onClick={() => setActiveTab('available-financial-aid')}
                            >
                                Available Financial Aid
                                <div className='short-line'></div>
                            </div>
                            <div
                                className={`nav-item ${activeTab === 'History' ? 'active History-text' : ''}`}
                                onClick={() => setActiveTab('History')}
                            >
                                History
                                <div className='short-line'></div>
                            </div>
                        </div>

            <div className='project-list'>
                <div className='project-container'>
                    <img src={vote_project1} alt='Project 1'/>
                    <h3>Rescue and Restore Campaign</h3>
                    <p>Provides urgent aid and long-term support to communities in crisis. It includes emergency relief, medical assistance, temporary shelter, and rebuilding efforts to ensure recovery and resilience.</p>
                    <div className='button-container'>
                        <div className='voter-number'>
                            <div className='vote-rectangle1'></div>
                            <div className='number'>583</div>
                        </div>
                        <div className='view-more-button'>View More</div>
                    </div>
                </div>

                <div className='project-container'>
                    <img src={vote_project2} alt='Project 2'/>
                    <h3>Rumah Hope</h3>
                    <p>Providing a suitable social setting with physical and emotional care to children who have been deprived of these necessities in life. </p>
                    <div className='button-container'>
                        <div className='voter-number'>
                            <div className='vote-rectangle2'></div>
                            <div className='number'>2384</div>
                        </div>
                        <div className='view-more-button'>View More</div>
                    </div>
                </div>

                <div className='project-container'>
                    <img src={vote_project3} alt='Project 3'/>
                    <h3>Flood Mitigation Projects</h3>
                    <p>Constructing flood barriers, upgrading drainage systems, and enhancing flood management infrastructure. </p>
                    <div className='button-container'>
                        <div className='voter-number'>
                            <div className='vote-rectangle3'></div>
                            <div className='number'>1024</div>
                        </div>
                        <div className='view-more-button' onClick={handleViewMoreClick}>View More</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Bantuan;
