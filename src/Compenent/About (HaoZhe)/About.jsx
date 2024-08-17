import React from 'react'
import './about.css'
import about_img from '../../assets/FundifyLogoSquare.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img 
                src={about_img} alt="" 
                className='about-img'
                style={{ width: '450px', height: '450px' }}
            />
        </div>
        <div className='about-right'>
            <h3>ABOUT FUNDIFY</h3>
            <h2>Your Funds, Your Visibility.</h2>
            <p>Fundify leverages blockchain technology to transform fund distribution with unparalleled transparency. 
                By using a secure and immutable ledger, we provide clear, real-time visibility into how funds are 
                allocated and utilized. This innovative approach ensures that every transaction is fully traceable 
                and verifiable, fostering trust and accountability between donors and recipients.</p>
            <p>Our platform is designed to offer a seamless and trustworthy donation experience. With Fundify, 
                you can be assured that your contributions are being used effectively and transparently. We are dedicated 
                to making a meaningful impact by maintaining the highest standards of integrity and openness 
                in fund distribution.</p>
        </div>
    </div>
  )
}

export default About