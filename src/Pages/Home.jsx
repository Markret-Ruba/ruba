import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigation hook

function Home() {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const divStyle = {
    backgroundImage: 'url(image/caps.jpg)',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex', // Use flexbox to center content
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    color: 'white', // Text color
    padding: '20px', // Padding around text
    textAlign: 'center', // Center text
  };

  return (
    <div style={divStyle}>
      {/* Real Estate Content */}
      <div className="content-section" style={{ marginBottom: '20px' }}>
        <h2>Your Dream Home Awaits</h2>
        <p>
          Discover luxury living with our exclusive real estate listings.<br />
          Whether you are looking for a cozy apartment or a sprawling estate,<br />
          we have the perfect home for you.<br />
          Experience top-notch amenities and prime locations that meet all your needs.<br />
          Our dedicated team is here to guide you every step of the way.
        </p>
      </div>

      {/* Add a Next button */}
      <button 
        onClick={() => navigate('/register')} // Navigate to Register page
        className="btn btn-primary mt-3">
        Register
      </button>
    </div>
  );
}

export default Home;
