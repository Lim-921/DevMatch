import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BantuanApply.css';

const BantuanApply = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    occupation: '',
    income: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or display a confirmation message
    console.log(formData);
    // Navigate to the BantuanHistory page
    navigate('/bantuanhistory');
  };

  return (
    <div className="bantuan-apply">
      <h1>Application Process</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-category">
          <h2>Personal Info</h2>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Age:
            <input 
              type="number" 
              name="age" 
              value={formData.age} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Phone Number:
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>

        <div className="form-category">
          <h2>Financial Status</h2>
          <label>
            Occupation:
            <input 
              type="text" 
              name="occupation" 
              value={formData.occupation} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Current Household Income:
            <input 
              type="number" 
              name="income" 
              value={formData.income} 
              onChange={handleChange} 
              required 
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BantuanApply;
