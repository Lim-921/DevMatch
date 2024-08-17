import React, { useState } from 'react';
import MainNavBar from '../MainNavBar (Marcus)/MainNavBar'; // Use the new MainNavBar
import './MainPage.css';
import temp_pic from '../../assets/Food Assistance Programs.png';
import temp_pic2 from '../../assets/Clean Water Initiatives.png';
import temp_pic3 from '../../assets/Education for Underserved Communities.png';
import next_arrow from '../../assets/nextbutton.png';  // Correct the import path
import back_arrow from '../../assets/backbutton.png';  // Correct the import path

const MainPage = () => {
    const [images, setImages] = useState([temp_pic, temp_pic2, temp_pic3]);

    const handleNext = () => {
        setImages([images[2], images[0], images[1]]);
    };

    const handleBack = () => {
        setImages([images[1], images[2], images[0]]);
    };

    return (
        <div>
            <MainNavBar /> {/* Use the new MainNavBar component */}
            <div className='main-features'>
                <div className='banner'>
                    <div className='feature-container'>
                        <img src={images[1]} alt="Feature 1" className='feature-image small' />
                        <img src={back_arrow} alt="Back" className='arrow-icon' onClick={handleBack} />
                    </div>
                    <img src={images[0]} alt="Feature 2" className='feature-image large' />
                    <div className='feature-container'>
                        <img src={images[2]} alt="Feature 3" className='feature-image small' />
                        <img src={next_arrow} alt="Next" className='arrow-icon' onClick={handleNext} />
                    </div>
                </div>
                <hr className='divider'></hr>
                <div className='contents'>
                    <div className='bantuan'>
                        <div className='bantuan-container'>
                            <div className='text-section'>
                                <h2>Bantuan</h2>
                                <p>Description goes here. This can be a detailed explanation or information relevant to the topic.</p>
                            </div>
                            <div className='image-section'>
                                <img src={temp_pic} alt="Bantuan Image" />
                            </div>
                        </div>
                    </div>
                    <div className='donate'>
                        <div className='donate-container'>
                            <div className='image-section'>
                                <img src={temp_pic2} alt="Donate Image" />
                            </div>
                            <div className='text-section'>
                                <h2>Donate</h2>
                                <p>This section is for donation-related content, where the description and details will be provided.</p>
                            </div>
                        </div>
                    </div>
                    <div className='vote'>
                        <div className='vote-container'>
                            <div className='text-section'>
                                <h2>Vote</h2>
                                <p>Description goes here. This can be a detailed explanation or information relevant to the topic.</p>
                            </div>
                            <div className='image-section'>
                                <img src={temp_pic3} alt="Vote Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
