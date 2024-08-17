import React, { useState } from 'react';
import MainNavBar from '../MainNavBar (Marcus)/MainNavBar'; // Use the new MainNavBar
import { Link } from 'react-router-dom'; // Import Link for navigation
import './MainPage.css';
import bantuan_image from '../../assets/bantuan-image.jpg';
import donate_image from '../../assets/category-2.jpg';
import vote_image from '../../assets/vote-image.jpg';
import next_arrow from '../../assets/arrow-next.png';
import back_arrow from '../../assets/back-arrow.png';

const MainPage = () => {
    // Array of image objects with their respective captions
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        { src: bantuan_image, caption: 'Financial Aid' },
        { src: donate_image, caption: 'Donate Now' },
        { src: vote_image, caption: 'Vote' }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const { src, caption } = images[currentIndex];

    return (
        <div>
            <MainNavBar /> {/* Use the new MainNavBar component */}
            <div className='main-features'>
                <div className='mainpage-background'>
                <div className='banner'>
                    <div className='feature-container'>
                        <div className='images'>
                            <img src={images[(currentIndex - 1 + images.length) % images.length].src} alt="Feature 1" className='feature-image small' />
                            <div className="caption">
                                <p>{images[(currentIndex - 1 + images.length) % images.length].caption}</p>
                            </div>
                        </div>
                        <img src={back_arrow} alt="Back" className='arrow-icon' onClick={handleBack} />
                    </div>
                    <div className='images'>
                        <img src={src} alt="Feature 2" className='feature-image large' />
                        <div className="caption">
                            <p>{caption}</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <div className='images'>
                            <img src={images[(currentIndex + 1) % images.length].src} alt="Feature 3" className='feature-image small' />
                            <div className="caption">
                                <p>{images[(currentIndex + 1) % images.length].caption}</p>
                            </div>
                        </div>
                        <img src={next_arrow} alt="Next" className='arrow-icon' onClick={handleNext} />
                    </div>
                </div>
                </div>
                
                <div className='contents'>
                    <div className='bantuan'>
                        <div className='bantuan-container'>
                            <div className='text-section'>
                                <h2>Financial Aids</h2>
                                <p>Financial aid provided by Government helps in economic stability and social well-being. By offering subsidies, grants, and support, we help mitigate the effects of rising living costs and unemployment. This aid empowers low-income families to access crucial services like healthcare, education, and housing, promoting equality and fostering a stronger, more cohesive society.</p>
                                <div className='button-bantuan'>
                                    Apply Now
                                </div>
                            </div>
                            <div className='image-section'>
                                <img src={bantuan_image} alt="Bantuan Image" />
                            </div>
                        </div>
                    </div>
                    <div className='donate'>
                        <div className='donate-container'>
                            <div className='image-section'>
                                <img src={donate_image} alt="Donate Image" />
                            </div>
                            <div className='text-section'>
                                <h2>Donate</h2>
                                <p>Your donation plays a vital role in strengthening our community and supporting those in need. By contributing, you help provide essential services like healthcare, education, and housing to families facing economic challenges. Every gift helps reduce inequality and build a more inclusive society. Join us in making a difference—your generosity transforms lives and creates a brighter future for all.</p>
                                <Link to="/donate">
                                    <div className='button-donate'>
                                        Donate Now
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='vote'>
                        <div className='vote-container'>
                            <div className='text-section'>
                                <h2>Vote</h2>
                                <p>Your vote is key to influencing our nation's future. By choosing the government project you think will make the most significant difference, you help guide essential initiatives and ensure they get the backing they deserve. Every vote matters in advancing our community and enhancing our country's prosperity. Make an impact by supporting the projects that promise the greatest benefits for all. Your participation drives meaningful progress and positive change.</p>
                                <Link to="/vote">
                                    <div className='button-vote'>
                                        Vote Now
                                    </div>
                                </Link>
                            </div>
                            <div className='image-section'>
                                <img src={vote_image} alt="Vote Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
