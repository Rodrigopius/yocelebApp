import React, { useState } from 'react';
import MobileHeader from './MobileHeader';

const MobileNavbar = () => {
  const [navbarStyles, setNavbarStyles] = useState({
    backgroundColor: '#2c3e50', // Dark blue background color
  });

  const iconContainerHover = {
    transform: 'translateY(-3px)',
    color: '#ecf0f1', // Light text color on hover
  };

  const handleMouseOver = () => {
    setNavbarStyles({
      backgroundColor: '#8F12FD', // Lighter purple on hover
    });
  };

  const handleMouseOut = () => {
    setNavbarStyles({
      backgroundColor: '#2c3e50', // Dark blue background color
    });
  };

  return (
    <div>
      <MobileHeader />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: '#ecf0f1',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '10px',
          boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          ...navbarStyles,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          style={{
            textAlign: 'center',
            transition: 'transform 0.3s, color 0.3s',
          }}
        >
          <i className="icon fas fa-user" style={{ fontSize: '18px', marginBottom: '3px', ...iconContainerHover }}></i>
          <span style={{ fontSize: '10px', display: 'block', marginTop: '3px' }}>Profile</span>
        </div>
        <div
          style={{
            textAlign: 'center',
            transition: 'transform 0.3s, color 0.3s',
          }}
        >
          <i className="icon fas fa-money-bill-wave" style={{ fontSize: '18px', marginBottom: '3px', ...iconContainerHover }}></i>
          <span style={{ fontSize: '10px', display: 'block', marginTop: '3px' }}>Deposit</span>
        </div>
        <div
          style={{
            textAlign: 'center',
            transition: 'transform 0.3s, color 0.3s',
          }}
        >
          <i className="icon fas fa-wallet" style={{ fontSize: '18px', marginBottom: '3px', ...iconContainerHover }}></i>
          <span style={{ fontSize: '10px', display: 'block', marginTop: '3px' }}>Wallet</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
