import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const tools = [
    {
      name: "Lead Magnet Brainstormer",
      description: "Generate up to 50 Lead Magnet Ideas using outputs from previous Bots!",
      link: "/lead-magnet"
    },
    {
      name: "Warm SMS Campaign Generator",
      description: "Effortlessly create a 5 SMS drip campaign to nurture and convert recipients.",
      link: "/sms-campaign"
    },
    {
      name: "Warm Email Drip Generator",
      description: "Nurture and convert inbound leads with effective Email Drip campaigns.",
      link: "/email-drip"
    },
    {
      name: "Cold Email Generator",
      description: "Generate dynamic email drip campaigns for cold leads!",
      link: "/cold-email"
    },
    {
      name: "Viral Email Subject Line Creator",
      description: "Create 25 viral Email Subject hooks for your email blasts!",
      link: "/subject-line"
    }
  ];

  return (
    <div className="dashboard">
      <h1>Premium AI Workflows</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <Link to={tool.link}>Start Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;