import React from 'react';
import './Transaction.css';
import etherscanmainpage1 from '../../assets/Etherscanmainpage-dark.png';
import etherscanmainpage2 from '../../assets/Etherscanmainpage-dim.png';
import etherscanmainpage3 from '../../assets/Etherscanmainpage-light.png';
import Marquee from 'react-fast-marquee';

const Transaction = () => {
  return (
    <div className='transaction'>
      <Marquee speed={25} style={{ display: 'flex', gap: '0px' }} gradient={true} gradientColor={[255, 255, 255]} gradientWidth={100}>
        <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
          <img src={etherscanmainpage3} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
        <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
          <img src={etherscanmainpage2} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
        <a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer">
          <img src={etherscanmainpage1} alt="" style={{ width: '1000px', height: '521px' }}/>
        </a>
      </Marquee>
    </div>
  )
}

export default Transaction;