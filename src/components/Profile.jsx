import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { auth, signInWithGoogle } from "./firebasee";
import { firestore, storage } from './firebasee'
import { ref } from 'firebase/storage';
import {
  BsPersonFill,
  BsBoxArrowRight,
  BsUpload,
} from "react-icons/bs";
import axios from "axios";
import "./ProfilePage.css";

const Profile = () => {
  const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  const [selectedNationalID, setSelectedNationalID] = useState(null);
  const [originalName, setOriginalName] = useState("");
  const [nickName, setNickName] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch countries with national flags from Restcountries API
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    // Fetch categories for celebrities
    const fetchCategories = async () => {
      try {
        // Replace the following array with an API call to get categories
        const exampleCategories = [
          "Musicians",
          "Singers",
          "Actors",
          "Athletes",
          "Journalists",
          "Authors",
          "Fashion Designers",
          "Comedians",
          "TV Personalities",
          "Dancers",
          "Chefs",
          "Entrepreneurs",
          "Directors",
          "Producers",
          "Models",
        ];
        setCategories(exampleCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCountries();
    fetchCategories();
  }, []);

  const handleFileChange = (event, setterFunction) => {
    const file = event.target.files[0];
    setterFunction(file);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleUpdateProfilePicture = (file, fileType) => {
    console.log(`Updating ${fileType} picture...`, file);
    // Add logic to update the profile picture
  };

  const handleSubmit = async () => {
    try {
      // Upload profile picture to Firebase Storage
      const profilePictureRef = storage.ref().child(`profilePictures/${originalName}`);
      await profilePictureRef.put(selectedProfilePicture);
      const profilePictureUrl = await profilePictureRef.getDownloadURL();
  
      // Upload national ID to Firebase Storage
      const nationalIDRef = storage.ref().child(`nationalIDs/${originalName}`);
      await nationalIDRef.put(selectedNationalID);
      const nationalIDUrl = await nationalIDRef.getDownloadURL();
  
      // Check if "TalentProfile" collection exists, create it if not
      const talentProfileCollectionRef = firestore.collection("TalentProfile");
      const talentProfileCollectionExists = await talentProfileCollectionRef.get().then((snapshot) => !snapshot.empty);
  
      if (!talentProfileCollectionExists) {
        await talentProfileCollectionRef.add({}); // Create a dummy document to create the collection
      }
  
      // Save data to Firestore in the "TalentProfile" collection
      await talentProfileCollectionRef.add({
        originalName,
        nickName,
        country,
        category,
        profilePictureUrl,
        nationalIDUrl,
      });
  
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="profile-card">
            <Card.Header className="text-center">
              {selectedProfilePicture ? (
                <img
                  src={URL.createObjectURL(selectedProfilePicture)}
                  alt="Profile"
                  className="rounded-circle img-fluid"
                  style={{ width: "60px", height: "60px" }}
                />
              ) : (
                <BsPersonFill size={60} />
              )}
            </Card.Header>
            <Card.Body>
              <h2 className="text-center mb-4">Setup Profile as a Celebrity</h2>
              <Form.Group controlId="formOriginalName" className="mb-3">
                <Form.Label>Original Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your original name"
                  value={originalName}
                  onChange={(e) => setOriginalName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formNickName" className="mb-3">
                <Form.Label>Nick Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your nickname"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formProfilePicture" className="mb-3">
                <Form.Label className="upload-label">
                  <BsUpload className="upload-icon" />
                  Choose Profile Picture
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) =>
                    handleFileChange(e, setSelectedProfilePicture)
                  }
                />
              </Form.Group>
              {selectedProfilePicture && (
                <Button
                  variant="success"
                  className="update-profile-button"
                  onClick={() =>
                    handleUpdateProfilePicture(
                      selectedProfilePicture,
                      "profile"
                    )
                  }
                >
                  <BsUpload className="update-profile-icon" />
                  Update Profile Picture
                </Button>
              )}
              <Form.Group controlId="formNationalID" className="mb-3">
                <Form.Label className="upload-label">
                  <BsUpload className="upload-icon" />
                  Upload National ID or Passport
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => handleFileChange(e, setSelectedNationalID)}
                />
              </Form.Group>
              {selectedNationalID && (
                <Button
                  variant="success"
                  className="update-profile-button"
                  onClick={() =>
                    handleUpdateProfilePicture(
                      selectedNationalID,
                      "national ID"
                    )
                  }
                >
                  <BsUpload className="update-profile-icon" />
                  Update National ID/Passport
                </Button>
              )}

              <Form.Group controlId="formCountry" className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  key="country-dropdown"
                >
                  <option key="select-country" value="">
                    Select a country
                  </option>
                  {countries.map((country) => (
                    <option
                      key={country.alpha3Code}
                      value={country.name.common}
                    >
                      {country.name.common}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formCategory" className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  key="category-dropdown"
                >
                  <option key="select-category" value="">
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                className="submit-button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button
                variant="danger"
                className="logout-button"
                onClick={handleLogout}
              >
                <BsBoxArrowRight className="logout-icon" />
                Logout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
// q: what is github copilot? 


export default Profile;
  