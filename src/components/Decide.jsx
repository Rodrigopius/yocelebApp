import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../img/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Decide = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    
  };

  const profileCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', 
    maxWidth: '400px',
    borderRadius: '25px',
    padding: '30px',
    border: '1px solid #ffffff40',
    boxShadow: '0 5px 20px rgba(0,0,0,0.4)',
    background: 'linear-gradient(to bottom right, var(--primary), var(--secondary))'
    
  };

  const imageStyle = {
    position: 'relative',
    height: '100px',
    width: '100px',
  };

  const profilePicStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 5px 20px rgba(0,0,0,0.4)',
  };

  const dataStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px',
  };

  const h2Style = {
    fontSize: '33px',
    fontWeight: '600',
    color: 'white',
  };

  const spanStyle = {
    fontSize: '18px',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  };

  const infoStyle = {
    textAlign: 'center',
    padding: '0 20px',
  };

  const buttonsStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
  };

  const btnStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 20px',
    padding: '8px 25px',
    borderRadius: '25px',
    fontSize: '18px',
    whiteSpace: 'nowrap',
    background: 'linear-gradient(to left, #33ccff 0%, #ff99cc 100%)',
  };

  const btnHoverStyle = {
    boxShadow: 'inset 0 5px 20px rgba(0,0,0,0.4)',
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom right, var(--primary), var(--secondary))' }}>
    <div className="container" style={containerStyle}>
      <div className="profile-card" style={profileCardStyle}>
      <div className="image" style={imageStyle}>
      <FontAwesomeIcon
        icon={faUser}
        alt=""
        className="profile-pic"
        style={{ ...profilePicStyle, fontSize: '100px' }} />
      </div>
        <div className="data" style={dataStyle}>
          <h2 style={h2Style}>User Access</h2>
          <span style={spanStyle}>Choose Access Type</span>
        </div>
       
          
        
        <div className="buttons" style={buttonsStyle}>
          <Link to='/Login' className="btn" style={btnStyle}>
           Fan
          </Link>
          <Link to="/CelebritySignup" href="#" className="btn" style={{ ...btnStyle, ...btnHoverStyle }}>
            Talent 
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Decide;
