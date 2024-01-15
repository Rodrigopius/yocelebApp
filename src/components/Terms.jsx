import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.title}>Terms Of Service</div>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Home</button>
        </Link>
      </header>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          This application is dedicated to fostering high-efficiency connectivity
          and fostering meaningful relationships between fans and their role
          models. We hold these values in the highest regard and extend a warm
          welcome to celebrities who choose to join our platform. By creating
          accounts with us, celebrities commit to being actively engaged in
          mentoring, guiding, and inspiring young individuals who aspire to follow
          in their footsteps.
        </p>
        <p style={styles.paragraph}>
          At the heart of our platform is the concept of one-on-one interaction.
          We strongly encourage our celebrity members to wholeheartedly embrace
          this opportunity and promote their availability to connect with fans
          through the online version of our application. By doing so, our esteemed
          celebrities contribute to a vibrant and enriching community where
          knowledge, inspiration, and guidance are shared to empower the
          aspirations of the next generation.
        </p>
        <p style={styles.paragraph}>
          We are committed to providing a safe, secure, and respectful environment
          for both our celebrity members and their fans. By using this platform,
          you acknowledge and agree to abide by our Terms of Service, Privacy
          Policy, and Community Guidelines, all of which are designed to ensure a
          positive and constructive experience for everyone.
        </p>
        <p style={styles.paragraph}>
          Your participation in our platform signifies your dedication to
          nurturing the dreams and ambitions of future generations and helping to
          shape a brighter and more inspired world. Together, we can make a
          difference and create lasting connections that bridge the gap between
          aspiration and achievement. Thank you for choosing to be a part of this
          extraordinary journey.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'rgba(17, 24, 39, 1)',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    background: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    maxWidth: '150px',
    transition: 'background 0.3s',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
  },
  content: {
    maxWidth: '800px',
    padding: '20px',
  },
  paragraph: {
    fontSize: '16px',
    color: '#fff',
    marginBottom: '20px',
  },
};

export default Terms;
