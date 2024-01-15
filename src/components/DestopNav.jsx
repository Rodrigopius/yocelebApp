import React from 'react';
import Images from './ImageCards'

const DesktopNav = () => {
  const styles = {
    mobileNavbar: {
      display: 'flex',
      justifyContent: 'flex-end', // Align items to the right
      alignItems: 'center',
      backgroundColor: '#3498db',
      color: '#ecf0f1',
      position: 'sticky',
      top: 0,
      width: '100%',
      padding: '10px',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      zIndex: 100,
    },
    websiteName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginRight: 'auto', // Push website name to the left
    },
    iconContainer: {
      textAlign: 'center',
      transition: 'transform 0.3s, color 0.3s',
      marginLeft: '10px', // Adjusted margin to the left for spacing
    },
    iconContainerHover: {
      transform: 'translateY(-5px)',
      color: '#f39c12',
    },
    icon: {
      fontSize: '15px',
      marginBottom: '5px',
    },
    span: {
      fontSize: '12px',
      display: 'block',
      marginTop: '5px',
    },
  };

  return (
    <div style={styles.mobileNavbar}>
      <div style={styles.websiteName}>Yoceleb</div>
      <div
        style={styles.iconContainer}
        onMouseOver={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            ...styles.iconContainerHover,
          };
        }}
        onMouseOut={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            transform: 'translateY(0)',
            color: '#ecf0f1',
          };
        }}
      >
        <i className="icon fas fa-user" style={styles.icon}></i>
        <span style={styles.span}>Profile</span>
      </div>
      <div
        style={styles.iconContainer}
        onMouseOver={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            ...styles.iconContainerHover,
          };
        }}
        onMouseOut={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            transform: 'translateY(0)',
            color: '#ecf0f1',
          };
        }}
      >
        <i className="icon fas fa-money-bill-wave" style={styles.icon}></i>
        <span style={styles.span}>Deposit</span>
      </div>
      <div
        style={styles.iconContainer}
        onMouseOver={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            ...styles.iconContainerHover,
          };
        }}
        onMouseOut={(e) => {
          e.stopPropagation();
          styles.iconContainer = {
            ...styles.iconContainer,
            transform: 'translateY(0)',
            color: '#ecf0f1',
          };
        }}
      >
        <i className="icon fas fa-wallet" style={styles.icon}></i>
        <span style={styles.span}>Wallet</span>
      </div>
    </div>
  );
};

export default DesktopNav;
