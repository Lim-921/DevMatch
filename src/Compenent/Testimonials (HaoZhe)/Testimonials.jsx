import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../../assets/nextbutton.png'
import backicon from '../../assets/backbutton.png'

import Decentralization from '../../assets/Decentralization.png'
import Accountability from '../../assets/Accountability.png'
import Transparency from '../../assets/Transparency.png'
import Efficiency from '../../assets/Efficiency.png'
import Security from '../../assets/Security.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
  const slidesCount = 5; // Total number of slides

  const slideForward = () => {
    tx -= 25;
    if (tx < -50) {
      tx = 0; // Reset to the first slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    tx += 25;
    if (tx > 0) {
      tx = -50; // Go to the last slide
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
        <img 
            src={nexticon} 
            alt="" 
            className='nextbutton'
            style={{ width: '100px', height: '100px' }}
            onClick={slideForward}
        />
        <img 
            src={backicon} 
            alt="" 
            className='backbutton'
            style={{ width: '100px', height: '100px' }}
            onClick={slideBackward}
        />
        <div className='slider'>
          <ul ref={slider} style={{ display: 'flex', transition: 'transform 0.5s ease' }}>
            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={Decentralization} alt='' />
                  <div>
                    <h3>Decentralization</h3>
                    <span>Empowering a Trustworthy System</span>
                  </div>
                </div>
                <p>Blockchain decentralizes the fund distribution process, removing the need for 
                    central authorities. This reduces the risk of corruption and increases trust, as no 
                    single entity controls the flow of funds.</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={Accountability} alt='' />
                  <div>
                    <h3>Accountability</h3>
                    <span>Traceable and Verifiable Records</span>
                  </div>
                </div>
                <p>Every transaction on the blockchain is fully traceable, providing a reliable record that 
                    holds all parties accountable for the proper use of funds. This builds trust and ensures that 
                    contributions are used as intended.</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={Transparency} alt='' />
                  <div>
                    <h3>Transparency</h3>
                    <span>Clear and Open Transactions</span>
                  </div>
                </div>
                <p>Blockchain provides an open, immutable ledger, allowing every transaction to be publicly verified. 
                    This ensures that fund distribution is clear and transparent, giving donors complete visibility 
                    into how their contributions are used.</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={Efficiency} alt='' />
                  <div>
                    <h3>Efficiency</h3>
                    <span>Faster and More Direct Impact</span>
                  </div>
                </div>
                <p>By eliminating intermediaries, blockchain technology reduces delays and costs, ensuring that funds 
                    reach their intended recipients more quickly and directly. This efficiency maximizes the impact of 
                    every donation</p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="userinfo">
                  <img src={Security} alt='' />
                  <div>
                    <h3>Security</h3>
                    <span>Protecting Your Contributions</span>
                  </div>
                </div>
                <p>Blockchain's decentralized nature and advanced cryptographic techniques ensure that data is secure 
                    and protected from unauthorized access or tampering, safeguarding the integrity of the entire fund 
                    distribution process.</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials;
