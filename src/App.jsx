import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LeadMagnetBrainstormer from './components/LeadMagnetBrainstormer';
import SMSCampaignGenerator from './components/SMSCampaignGenerator';
import EmailDripGenerator from './components/EmailDripGenerator';
import ColdEmailGenerator from './components/ColdEmailGenerator';
import SubjectLineGenerator from './components/SubjectLineGenerator';

console.log('App component loaded');

function App() {
  console.log('Rendering App component');
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/lead-magnet">Lead Magnet</Link></li>
          <li><Link to="/sms-campaign">SMS Campaign</Link></li>
          <li><Link to="/email-drip">Email Drip</Link></li>
          <li><Link to="/cold-email">Cold Email</Link></li>
          <li><Link to="/subject-line">Subject Line</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/lead-magnet" element={<LeadMagnetBrainstormer />} />
        <Route path="/sms-campaign" element={<SMSCampaignGenerator />} />
        <Route path="/email-drip" element={<EmailDripGenerator />} />
        <Route path="/cold-email" element={<ColdEmailGenerator />} />
        <Route path="/subject-line" element={<SubjectLineGenerator />} />
      </Routes>
    </div>
  );
}

export default App;