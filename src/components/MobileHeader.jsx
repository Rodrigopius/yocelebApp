import React, { useEffect } from 'react';

const MobileHeader = () => {
  useEffect(() => {
    // Inline styles
    const styles = `
      /* Header styles */
      .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #8F12FD;
        color: #fff;
        padding: 20px;
        text-align: center;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        z-index: 100; /* Ensure it is above other content */
      }

      /* Title styles */
      .header h1 {
        margin: 0;
        font-size: 24px;
      }

      /* Responsive styles using media queries */
      @media (max-width: 600px) {
        .header {
          padding: 15px;
        }

        .header h1 {
          font-size: 20px;
        }
      }
    `;

    // Create a <style> element and set its text content
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;

    // Insert the <style> element into the document's head
    document.head.appendChild(styleTag);

    // Clean up the styles on component unmount
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="header">
      <h1>Yoceleb</h1>
    </div>
  );
};

export default MobileHeader;
