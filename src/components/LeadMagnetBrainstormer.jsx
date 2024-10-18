import React, { useState } from 'react';

function LeadMagnetBrainstormer() {
  const [formData, setFormData] = useState({
    elevatorPitch: '',
    customerAvatar: '',
    painPoints: '',
    brandWritingStyle: '',
    xFactor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Lead Magnet Ideas generated! (This is a placeholder for the actual AI generation)');
  };

  return (
    <div className="lead-magnet-brainstormer">
      <h1>Lead Magnet Brainstormer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="elevatorPitch">Paste Results From Elevator Pitch Workflow:</label>
          <textarea id="elevatorPitch" name="elevatorPitch" value={formData.elevatorPitch} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="customerAvatar">Paste Results From Customer Avatar Workflow:</label>
          <textarea id="customerAvatar" name="customerAvatar" value={formData.customerAvatar} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="painPoints">Paste Results From Pain Points Workflow:</label>
          <textarea id="painPoints" name="painPoints" value={formData.painPoints} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="brandWritingStyle">Paste Results From Brand Writing Style Workflow:</label>
          <textarea id="brandWritingStyle" name="brandWritingStyle" value={formData.brandWritingStyle} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="xFactor">Paste Results From X Factor Workflow:</label>
          <textarea id="xFactor" name="xFactor" value={formData.xFactor} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">GENERATE!</button>
      </form>
    </div>
  );
}

export default LeadMagnetBrainstormer;