import React, { useEffect, useState } from 'react';
import DesktopNav from './DestopNav';
import MobileNav from './MobileNav';
import SearchButton from './Search';

import img8 from '../img/beyonce.jpg';


// Example images for each category
const celebrityImages = {
  actor: 'https://via.placeholder.com/150x200',
  musician: 'https://via.placeholder.com/150x200',
  athlete: 'https://via.placeholder.com/150x200',
};

// Mock API
export const fetchCelebrities = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
   
        { name: 'Beyoncé Beyonce', category: 'musician', imageUrl: img8, rating: '5/5' },
      
        
      
   
      ]);
    }, 1000);
  });
};

const CelebrityCard = ({ name, imageUrl, rating }) => {
  const handleContact = () => {
    alert(`Contact ${name}`);
  };

  return (
    <div style={{ maxWidth: '150px', margin: '10px', textAlign: 'center', height: '100%' }}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
      />
      <h3 style={{ margin: '5px 0', fontSize: '14px' }}>{name}</h3>
      <p style={{ margin: '5px 0', fontSize: '12px', color: '#888' }}>Rating: {rating}</p>
      <button
        style={{ padding: '5px 10px', fontSize: '12px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '4px' }}
        onClick={handleContact}
      >
        Contact
      </button>
    </div>
  );
};

const CelebrityRow = ({ celebrities }) => {
  return (
    <div style={{ display: 'flex', padding: '10px', backgroundColor: '#000', overflowX: 'auto', overflowY: 'hidden'}}>
      {celebrities.map((celebrity) => (
        <CelebrityCard key={celebrity.name} {...celebrity} />
      ))}
    </div>
  );
};

const CelebrityCategories = () => {
  const [celebrities, setCelebrities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const apiCelebrities = await fetchCelebrities();
      setCelebrities(apiCelebrities.reduce((acc, celebrity) => {
        if (!acc[celebrity.category]) {
          acc[celebrity.category] = [];
        }
        acc[celebrity.category].push(celebrity);
        return acc;
      }, {}));
    };

    fetchData();
  }, []);

  return (
    <div style={{ position: 'relative', marginTop:'100px' }}>
      {/* Featured row */}
      <h2>Featured</h2>
      {celebrities.featured && <CelebrityRow celebrities={celebrities.featured} />}

      {/* Actor row */}
      {celebrities.actor && <CelebrityRow celebrities={celebrities.actor} />}

      {/* Musician row */}
      <h2>Musicians</h2>
      {celebrities.musician && <CelebrityRow celebrities={celebrities.musician} />}

      {/* Athlete row */}
      <h2>Athlete</h2>
      {celebrities.athlete && <CelebrityRow celebrities={celebrities.athlete} />}
    </div>
  );
};

const DesktopNavbar = () => {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100, background: '#000' }}>
      <DesktopNav />
      {/* Desktop navigation bar content */}
      <SearchButton />
      <CelebrityCategories />
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <div style={{ position: 'sticky',  zIndex: 100, background: '#000', width: '100%', marginBottom:'50px' }}>
      <CelebrityCategories />
    <MobileNav />
    {/* Mobile navigation bar content */}
    <SearchButton />
    
  </div>
  );
};

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Apply black theme to the body
  useEffect(() => {
    document.body.style.backgroundColor = '#000'; // Black background color for the body
    document.body.style.color = '#fff'; // White text color
  }, []);

  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      {/* Other content of your app */}
    </div>
  );
};

export default Navigation;
