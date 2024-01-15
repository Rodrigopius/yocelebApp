import React, { useState, useEffect } from "react";
import axios from "axios";

const TalentProfile = () =>{


    const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [profileImage, setProfileImage] = useState(null); // Define setProfileImage here

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data: " + error);
      });
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Handle file input change and store the selected file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfileImage(file);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Upload the selected file (profileImage) using an API request here
    // Add your file upload logic
  };

    return(
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div style={{ alignItems: "center", justifyContent: "center" }}>
                  <section className="wrapper">
                    <div className="form signup">
                      <header>Signup</header>
                      <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full name" required />
                        <input type="text" placeholder="Nick name" required />

                        <div>
                          <label
                           style={{ display: "block", marginBottom: "5px", fontsize: "20px", color: 'white' }}
                          >
                            Country:
                          </label>
                          <select
                            style={{
                              padding: "10px",
                              borderRadius: "5px",
                              border: "2px solid #3498db",
                              width: "30vh",
                              fontSize: "16px",
                              color: "#333",
                              backgroundColor: "#f5f5f5",
                              cursor: "pointer",
                              fontFamily: "Arial, sans-serif",
                            }}
                            name="country"
                            onChange={handleCountryChange}
                            value={selectedCountry}
                          >
                            <option
                              value=""
                              style={{
                                backgroundColor: "white",
                                fontSize: "16px",
                                color: "#333",
                              }}
                            >
                              <p style={{ color: "white", fontWeight: "bold" }}>
                                Select a country
                              </p>
                            </option>
                            {countries.map((country) => (
                              <option
                                key={country.name}
                                value={country.name}
                                style={{
                                  backgroundColor: "#f5f5f5",
                                  fontSize: "16px",
                                  color: "#333",
                                  padding: "8px",
                                  borderRadius: "5px",
                                  marginBottom: "4px",
                                }}
                              >
                                {country.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                          <label
                            htmlFor="industrySelect"
                            style={{ display: "block", marginBottom: "5px", fontsize: "20px", color: 'white' }}
                          >
                            Select Your Industry:
                          </label>
                          <select
                            id="industrySelect"
                            name="industry"
                            style={{
                              width: "100%",
                              padding: "10px",
                              borderRadius: "5px",
                              border: "2px solid #3498db",
                              fontSize: "16px",
                              color: "#333",
                            }}
                          >
                            <option value="Movie Actors">Movie Actors</option>
                            <option value="Music Artists">Music Artists</option>
                            <option value="Sports Athletes">
                              Sports Athletes
                            </option>
                            <option value="Television Personalities">
                              Television Personalities
                            </option>
                            <option value="Authors">Authors</option>
                            <option value="Fashion Designers">
                              Fashion Designers
                            </option>
                            <option value="Tech Innovators">
                              Tech Innovators
                            </option>
                            <option value="Entrepreneurs">Entrepreneurs</option>
                            <option value="Politicians">Politicians</option>
                            <option value="Social Media Influencers">
                              Social Media Influencers
                            </option>
                            <option value="Spiritual Leaders">
                              Spiritual Leaders
                            </option>
                            {/* Add more industry options as needed */}
                          </select>
                        </div>

                        <div>
                          <label
                            style={{ display: "block", marginBottom: "5px", fontsize: "20px", color: 'white' }}
                          >
                            Picture Of National ID:
                          </label>
                          <input
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{
                              padding: "10px",
                              borderRadius: "5px",
                              border: "2px solid #3498db",
                              width: "100%",
                              fontSize: "16px",
                              color: "#333",
                              backgroundColor: "#f5f5f5",
                              cursor: "pointer",
                            }}
                          />
                        </div>

                        <input
                          type="text"
                          placeholder="Email address"
                          required
                        />
                        <input type="number" placeholder="Phone" required />
                        <input
                          type="password"
                          placeholder="Password"
                          required
                        />

                        <div className="checkbox">
                          <input type="checkbox" id="signupCheck" />
                          <label htmlFor="signupCheck">
                            I accept all terms & conditions
                          </label>
                        </div>
                        <input type="submit" value="Register" />
                      </form>
                    </div>

                    <div className="form login">
                      <header>Yoceleb</header>
                      <form action="#"></form>
                    </div>
                  </section>
                </div>
              </div>
           
         
    )
}
export default TalentProfile;