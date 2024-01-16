import React from "react";


const Images = () => {
  const cardContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyles = {
    maxWidth: '300px',
    margin: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };

  const imageStyles = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <div style={cardContainer}>
      <div style={cardStyles}>
        
      
     
      </div>
    </div>
  );
};

export default Images;
