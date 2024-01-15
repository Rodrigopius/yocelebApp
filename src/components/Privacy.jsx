import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.title}>Privacy Policy</div>
        <Link to="/" style={styles.link}>
          <button style={styles.button}>Home</button>
        </Link>
      </header>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          At YoCeleb, we are unwavering in our commitment to providing you, our
          valued users, with the highest levels of privacy and data security.
          Our platform serves as a bridge between celebrities and their devoted
          fans, and we understand the importance of preserving the privacy of
          these interactions. To ensure a secure and confidential environment,
          we have put in place robust privacy measures.
        </p>
        <p style={styles.paragraph}>
          <b>User-Centric Data Access:</b> YoCeleb guarantees that personal
          information and data are accessible exclusively by the respective
          user. We prioritize your right to maintain full control over your
          data. Your data, your rules.
          <br />
          <br />
          <b>Account Security:</b> We firmly believe that the ownership of
          accounts and passcodes should remain confidential and known solely to
          the owner. This practice is not only a privilege but also a critical
          step in safeguarding your data and thwarting potential cybercrimes.
          <br />
          <br />
          <b>Cutting-Edge Cybersecurity:</b> Our platform employs
          state-of-the-art cybersecurity protocols to protect your information
          from any potential threats. These measures encompass encryption,
          firewalls, intrusion detection systems, and routine security audits.
          Your privacy and data security are our top priorities.
          <br />
          <br />
          <b>Secure and Private Interactions:</b> YoCeleb ensures that all
          interactions between celebrities and their fans occur in a secure and
          private manner. Your conversations and interactions are held in the
          strictest confidence, and your data is never shared or sold to third
          parties.
          <br />
          <br />
          <b>Compliance with Data Protection Laws:</b> We are committed to
          complying with all relevant data protection laws and regulations. Our
          security protocols are continually updated to keep your information
          secure and in alignment with the ever-evolving landscape of data
          privacy legislation.
        </p>

        <p style={styles.paragraph}>
          Your trust and privacy are invaluable to us. By being part of our
          platform, you are joining a community dedicated to maintaining the
          highest standards of privacy while connecting with your favorite
          celebrities. We are proud to provide a secure, confidential, and
          trustworthy environment for all users, ensuring that you can enjoy
          meaningful interactions while knowing your privacy is well-guarded.<br/><br/>
          Thank you for choosing YoCeleb as your platform for connecting with
          your idols and peers. We look forward to sharing this journey with you
          as we continue to champion your privacy and data security.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "rgba(17, 24, 39, 1)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    width: "100%",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    maxWidth: "150px",
    transition: "background 0.3s",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    textDecoration: "none",
  },
  content: {
    maxWidth: "800px",
    padding: "20px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#fff",
    marginBottom: "20px",
  },
};

export default PrivacyPolicy;
