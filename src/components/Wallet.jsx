import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsPersonFill, BsKey, BsPencil, BsBoxArrowRight, BsUpload } from 'react-icons/bs';
import './ProfilePage.css'; // Import a separate CSS file for styling

const Wallet= () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleResetPassword = () => {
    console.log('Resetting password...');
  };

  const handleChangeUsername = () => {
    console.log('Changing username...');
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  const handleUpdateProfilePicture = () => {
    console.log('Updating profile picture...', selectedFile);
    // Add logic to update the profile picture
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="profile-card">
            <Card.Header className="text-center">
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Profile"
                  className="rounded-circle img-fluid"
                  style={{ width: '60px', height: '60px' }}
                />
              ) : (
                <BsPersonFill size={60} />
              )}
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-center">John Doe</Card.Title>
              <Card.Text className="text-center">johndoe@example.com</Card.Text>
              <hr />
              <div className="text-center mb-3">
                <label htmlFor="fileInput" className="upload-label">
                  <BsUpload className="upload-icon" />
                  Choose Profile Picture
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>
              {selectedFile && (
                <button className="update-profile-button" onClick={handleUpdateProfilePicture}>
                  <BsUpload className="update-profile-icon" />
                  Update Profile Picture
                </button>
              )}
              <button className="profile-button" onClick={handleResetPassword}>
                <BsKey className="profile-icon" />
                Reset Password
              </button>
              <button className="profile-button" onClick={handleChangeUsername}>
                <BsPencil className="profile-icon" />
                Change Username
              </button>
              <button className="logout-button" onClick={handleLogout}>
                <BsBoxArrowRight className="logout-icon" />
                Logout
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;
