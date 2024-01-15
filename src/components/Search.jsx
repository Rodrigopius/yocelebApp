import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchButton = () => {
  const styles = {
    searchContainer: {
      display: 'flex',
      marginLeft: '50px',
      position: 'fixed',
      top: 0,
      width: '100%',
      
      zIndex: 100, // Ensure it is above other content
      marginTop: '50px'
    },
    searchInput: {
      width: '60%',
      padding: '10px',
      fontSize: '16px',
    
      
    },
    searchButton: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: 'blue',
      color: '#fff',
      border: '1px solid #3498db',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    searchButtonHover: {
      backgroundColor: '#2980b9',
    },
    responsiveStyles: {
      '@media (max-width: 600px)': {
        searchInput: {
          fontSize: '14px',
          padding: '8px',
        },
        searchButton: {
          fontSize: '14px',
          padding: '8px',
        },
      },
    },
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search For Your Star..."
        style={{ ...styles.searchInput, ...{ borderRadius: '30px' } }}
      />
      <button
        style={{
          ...styles.searchButton,
          ...styles.searchButtonHover,
          ...{ backgroundColor: 'black', border: '1px solid black', marginTop: '6px' },
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchButton;
