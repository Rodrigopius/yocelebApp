import React from "react";
import img1 from '../img/fun1.jpg';
import img2 from '../img/fun2.jpg';
import img3 from '../img/fun3.jpg';
import img4 from '../img/fun4.jpg';
import img5 from '../img/fun5.jpg';

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
        <img src={img1} alt="Yoceleb" style={imageStyles} />
      </div>
      <div style={cardStyles}>
        <img src={img2} alt="Yoceleb" style={imageStyles} />
      </div>
      <div style={cardStyles}>
        <img src={img3} alt="Yoceleb" style={imageStyles} />
      </div>
      <div style={cardStyles}>
        <img src={img4} alt="Yoceleb" style={imageStyles} />
      </div>
      <div style={cardStyles}>
        <img src={img5} alt="Yoceleb" style={imageStyles} />
      </div>
    </div>
  );
};

export default Images;
