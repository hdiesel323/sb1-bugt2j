import React, { useState } from 'react';

function ColdEmailGenerator() {
  const [formData, setFormData] = useState({
    product: '',
    brandStyle: '',
    campaignGoal: '',
    customerAvatars: '',
    emojiUsage: '',
    notes: '',
    salesPage: '',
    appointmentLink: '',
    textBackKeyword: '',
    specialOffer: '',
    offerExpiry: '',
    offerLimit: '',
    features: '',
    usePlaceholder: '',
    mentionContactSource: '',
    contactSource: ''
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
    alert('Cold Email Drip Campaign generated! (This is a placeholder for the actual AI generation)');
  };

  return (
    <div className="cold-email-generator">
      <h1>Cold Email Drip Campaign Generator</h1>
      <form onSubmit={handleSubmit}>
        {/* Reuse the same fields as SMSCampaignGenerator */}
        {/* ... */}
        <div>
          <label htmlFor="mentionContactSource">Do you want to mention how you got the contact's information?</label>
          <select id="mentionContactSource" name="mentionContactSource" value={formData.mentionContactSource} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactSource">How did you get the user's contact information?</label>
          <input type="text" id="contactSource" name="contactSource" value={formData.contactSource} onChange={handleChange} placeholder="Put 'none' if you don't wish to mention." />
        </div>
        <button type="submit">GENERATE!</button>
      </form>
    </div>
  );
}

export default ColdEmailGenerator;