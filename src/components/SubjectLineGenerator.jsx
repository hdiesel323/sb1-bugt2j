import React, { useState } from 'react';

function SubjectLineGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    emailPurpose: '',
    offerOrCta: '',
    emojiUsage: '',
    brandWritingStyle: ''
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
    alert('Viral Email Subject Lines generated! (This is a placeholder for the actual AI generation)');
  };

  return (
    <div className="subject-line-generator">
      <h1>Viral Email Subject Line Creator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="emailPurpose">Describe the purpose of the email:</label>
          <textarea id="emailPurpose" name="emailPurpose" value={formData.emailPurpose} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="offerOrCta">Describe the offer or CTA that you are offering:</label>
          <textarea id="offerOrCta" name="offerOrCta" value={formData.offerOrCta} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label htmlFor="emojiUsage">Do you want to use emoji?</label>
          <select id="emojiUsage" name="emojiUsage" value={formData.emojiUsage} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="none">None</option>
            <option value="1-2">1-2 is fine</option>
            <option value="alot">Use a lot!</option>
          </select>
        </div>
        <div>
          <label htmlFor="brandWritingStyle">Describe your Brand Writing Style:</label>
          <textarea id="brandWritingStyle" name="brandWritingStyle" value={formData.brandWritingStyle} onChange={handleChange} required placeholder="(or paste your brand writing style from previous bot)"></textarea>
        </div>
        <button type="submit">GENERATE!</button>
      </form>
    </div>
  );
}

export default SubjectLineGenerator;