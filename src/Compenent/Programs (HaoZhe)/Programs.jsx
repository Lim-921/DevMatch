import React from 'react';
import './Programs.css';
import { useNavigate } from 'react-router-dom';
import program_1 from '../../assets/Food Assistance Programs.png';
import program_2 from '../../assets/Clean Water Initiatives.png';
import program_3 from '../../assets/Education for Underserved Communities.png';

const Programs = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate('/Category', { state: { category } });
  };

  return (
    <div className='programs'>
        <div className="program" onClick={() => handleNavigation('financial')}>
            <img src={program_1} alt="Food Assistance Programs" />
            <div className="caption">
                <p>Food Assistance Programs</p>
            </div>
        </div>
        <div className="program" onClick={() => handleNavigation('education')}>
            <img src={program_2} alt="Clean Water Initiatives" />
            <div className="caption">
                <p>Clean Water Initiatives</p>
            </div>
        </div>
        <div className="program" onClick={() => handleNavigation('public')}>
            <img src={program_3} alt="Education for Underserved Communities" />
            <div className="caption">
                <p>Education for Underserved Communities</p>
            </div>
        </div>
    </div>
  );
};

export default Programs;
