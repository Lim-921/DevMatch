import React from 'react';
import './Transaction.css';
import masversemainpage1 from '../../assets/masversemainpage.png';
import masversemainpage2 from '../../assets/masverseexplore.png';
import masversemainpage3 from '../../assets/maschaincheck.png';
import Marquee from 'react-fast-marquee';

const Transaction = () => {
  return (
    <div className='transaction'>
      <Marquee speed={100} style={{ display: 'flex', gap: '0px' }} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100}>
        <a href="https://www.masverse.com.my/" target="_blank" rel="noopener noreferrer">
          <img src={masversemainpage1} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
        <a href="https://explorer.maschain.com/" target="_blank" rel="noopener noreferrer">
          <img src={masversemainpage3} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
        <a href="https://explorer.maschain.com/" target="_blank" rel="noopener noreferrer">
          <img src={masversemainpage2} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
      </Marquee>
    </div>
  )
}

export default Transaction;