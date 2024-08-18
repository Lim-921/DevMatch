import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';
import vote_project1 from '../../assets/WHO.png';
import vote_project2 from '../../assets/voteproject2.jpg';
import vote_project3 from '../../assets/voteproject3.jpeg';
import MainNavBar from '../MainNavBar (Marcus)/MainNavBar';

const Donate = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to the top of the page when this component is rendered
        window.scrollTo(0, 0);
    }, []);

    const handleViewMoreClick = () => {
        navigate('/vote-project');
    };

    return (
        <div>
            <MainNavBar />
            <div className='votepage-background'>
                <div className='vote-title'>
                    <h1>Donate for the Projects</h1>
                    <p>Your donation is key to influencing our nation's future. By choosing the government project you think will make the most significant difference, 
                        you help guide essential initiatives and ensure they get the backing they deserve. Every donation benefits for all. Your participation drives meaningful 
                        progress and positive change.</p>
                </div>
                
            </div>
            <div className='vote-page'>

            <div className='project-list'>
                <div className='project-container'>
                    <img src={vote_project1} alt='Project 1'/>
                    <h3>World Health Organization</h3>
                    <p>The WHO leads global health efforts, setting standards and tackling diseases. Its successes include eradicating smallpox and advancing polio eradication, saving millions of lives worldwide.</p>
                    <div className='button-container'>
                        <div className='view-more-button'>View More</div>
                    </div>
                </div>

                <div className='project-container'>
                    <img src={vote_project2} alt='Project 2'/>
                    <h3>Rumah Hope</h3>
                    <p>Providing a suitable social setting with physical and emotional care to children who have been deprived of these necessities in life. </p>
                    <div className='button-container'>
                        <div className='view-more-button'>View More</div>
                    </div>
                </div>

                <div className='project-container'>
                    <img src={vote_project3} alt='Project 3'/>
                    <h3>Flood Mitigation Projects</h3>
                    <p>Constructing flood barriers, upgrading drainage systems, and enhancing flood management infrastructure. </p>
                    <div className='button-container'>
                        <div className='view-more-button' onClick={handleViewMoreClick}>View More</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Donate;
