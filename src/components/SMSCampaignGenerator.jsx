import React, { useState } from 'react';

function SMSCampaignGenerator() {
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
    usePlaceholder: false
  });

  const [generatedCampaign, setGeneratedCampaign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form submitted:', formData);
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock generated campaign (replace this with actual AI generation later)
    const mockCampaign = [
      `Hi ${formData.usePlaceholder ? '[Name]' : 'there'}! 👋 Discover how ${formData.product} can help you ${formData.campaignGoal}. Learn more: ${formData.salesPage}`,
      `${formData.usePlaceholder ? '[Name]' : 'Hey'}, did you know ${formData.product} offers ${formData.features}? Don't miss out! ${formData.appointmentLink ? 'Book a call: ' + formData.appointmentLink : 'Visit: ' + formData.salesPage}`,
      `Last chance, ${formData.usePlaceholder ? '[Name]' : 'friend'}! ${formData.specialOffer} ${formData.offerExpiry ? 'Expires ' + formData.offerExpiry : ''} ${formData.offerLimit ? 'Limited to ' + formData.offerLimit + ' people' : ''}. Reply "${formData.textBackKeyword}" to claim!`,
    ];

    setGeneratedCampaign(mockCampaign);
    setIsLoading(false);
  };

  return (
    <div className="sms-campaign-generator">
      <h1>Warm SMS Campaign Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product">Describe your main product/offer and/or service:</label>
          <input type="text" id="product" name="product" value={formData.product} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="brandStyle">What is the tone/style of your brand?</label>
          <input type="text" id="brandStyle" name="brandStyle" value={formData.brandStyle} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="campaignGoal">Main campaign goal:</label>
          <input type="text" id="campaignGoal" name="campaignGoal" value={formData.campaignGoal} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="customerAvatars">Who are your ideal customer avatars?</label>
          <input type="text" id="customerAvatars" name="customerAvatars" value={formData.customerAvatars} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="emojiUsage">How often would you like to use emoji in this campaign?</label>
          <select id="emojiUsage" name="emojiUsage" value={formData.emojiUsage} onChange={handleChange} required>
            <option value="">Select an option</option>
            <option value="never">Never</option>
            <option value="sometimes">Sometimes</option>
            <option value="alot">A lot</option>
          </select>
        </div>
        <div>
          <label htmlFor="notes">Any final notes on what to or not to include:</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="salesPage">Enter HTML to sales page:</label>
          <input type="text" id="salesPage" name="salesPage" value={formData.salesPage} onChange={handleChange} placeholder="(if none, put 'none')" />
        </div>
        <div>
          <label htmlFor="appointmentLink">Enter HTML for appointment link:</label>
          <input type="text" id="appointmentLink" name="appointmentLink" value={formData.appointmentLink} onChange={handleChange} placeholder="(if none, put 'none')" />
        </div>
        <div>
          <label htmlFor="textBackKeyword">Enter word you wish them to text back:</label>
          <input type="text" id="textBackKeyword" name="textBackKeyword" value={formData.textBackKeyword} onChange={handleChange} placeholder="(if none, put 'none')" />
        </div>
        <div>
          <label htmlFor="specialOffer">Is there any special offer you'd like to mention?</label>
          <input type="text" id="specialOffer" name="specialOffer" value={formData.specialOffer} onChange={handleChange} placeholder="(if none, put 'none')" />
        </div>
        <div>
          <label htmlFor="offerExpiry">Does this offer expire?</label>
          <input type="text" id="offerExpiry" name="offerExpiry" value={formData.offerExpiry} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="offerLimit">Is this offer limited to a certain number of people?</label>
          <input type="text" id="offerLimit" name="offerLimit" value={formData.offerLimit} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="features">What features and benefits do they get from this offer?</label>
          <textarea id="features" name="features" value={formData.features} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="usePlaceholder">Do you want to leave a placeholder for the contact's name?</label>
          <input type="checkbox" id="usePlaceholder" name="usePlaceholder" checked={formData.usePlaceholder} onChange={handleChange} />
        </div>
        <button type="submit" className="generate-button" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="loading-spinner"></span>
              <span>Generating...</span>
            </>
          ) : (
            'GENERATE!'
          )}
        </button>
      </form>

      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Generating SMS Campaign...</p>
        </div>
      )}

      {generatedCampaign && !isLoading && (
        <div className="generated-campaign">
          <h2>Generated SMS Campaign</h2>
          {generatedCampaign.map((message, index) => (
            <div key={index} className="sms-message">
              <h3>Message {index + 1}:</h3>
              <p>{message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SMSCampaignGenerator;