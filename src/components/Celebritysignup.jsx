import React, { useState, useEffect } from "react";
import axios from "axios";
import "./celebSignup.css";
import { Link } from "react-router-dom";
import Register from "./Signup";
import TalentProfile from './TalentProfile'

import img1 from "../img/about.png";
import img2 from "../img/screenshot-1.png";
import img3 from "../img/screenshot-2.png";
import img4 from "../img/screenshot-3.png";
import img5 from "../img/screenshot-4.png";
import img6 from "../img/screenshot-5.png";
import img7 from "../img/bg-top.png";
import img8 from "../img/screenshot-frame.png";
import img9 from "../img/img.PNG";

function CelebSignup() {
  
  return (
    <div
      className="app"
      data-bs-spy="scroll"
      data-bs-target=".navbar"
      data-bs-offset="51"
    >
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0" id="home">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
              <h1 className="m-0">Yoceleb</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <a href="#home" className="nav-item nav-link active">
                  Home
                </a>
                <a href="#about" className="nav-item nav-link">
                  About
                </a>
                <a href="#feature" className="nav-item nav-link">
                  Feature
                </a>
                <a href="#pricing" className="nav-item nav-link">
                  Pricing
                </a>
                <a href="#review" className="nav-item nav-link">
                  Review
                </a>
                <a href="#contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="container-xxl py-5" id="about">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Why Us</h5>
                <h1 className="mb-4">Why Join Our Platform as a Celebrity</h1>
                <p className="mb-4">
                  Are you a prominent figure in your industry or someone who has
                  inspired countless individuals? We invite you to be part of
                  our exclusive community where you can directly connect with
                  your fans, share your wisdom, and earn a substantial income
                  for your valuable time and advice.
                </p>
                <p>
                  <b>1.1. Monetize Your Influence:</b>
                  Joining our platform allows you to leverage your fame and
                  expertise into a lucrative income stream. Your fans admire and
                  look up to you, and now you can turn those interactions into a
                  source of revenue. Get paid to offer personalized advice,
                  motivational messages, or create one-of-a-kind videos for your
                  followers.
                </p>

                <p>
                  <b>1.2. Empower and Inspire:</b>
                  Your journey, experiences, and insights have the power to
                  change lives. By being part of our platform, you can inspire
                  the next generation, offer guidance, and motivate your fans to
                  reach their goals. Your words of encouragement and
                  personalized messages can leave a lasting impact on those who
                  look up to you.
                </p>

                <p>
                  <b>1.3. Flexible Schedule:</b>
                  Enjoy the flexibility of connecting with your fans on your
                  terms. You decide when and how often you're available to
                  interact with your audience. This means you can continue your
                  career, focus on your passions, and still make a meaningful
                  income by simply sharing your wisdom.
                </p>

                <p>
                  <b>1.4. Safe and Supportive Environment:</b>
                  We provide a secure and welcoming environment for both
                  celebrities and fans. Our platform ensures privacy and
                  maintains a professional atmosphere to protect your brand and
                  reputation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5" id="feature">
          <div className="container py-5 px-lg-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-5">How It Works</h1>
              <p>
                Joining our platform is a straightforward and rewarding
                experience. Here's how it works for celebrities:
              </p>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Create Your Profile</h5>
                  <p className="m-0">
                    Sign up by filling out your profile with information about
                    your career, achievements, and areas of expertise. Showcase
                    your unique personality to attract fans who resonate with
                    your story.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Set Your Rates</h5>
                  <p className="m-0">
                    Determine your pricing for various interactions – whether
                    it's personalized video messages, one-on-one chats, or
                    exclusive content. You have full control over how much you
                    earn for your time and expertise.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Receive Requests</h5>
                  <p className="m-0">
                    Fans who admire you will send requests for personalized
                    interactions or inspirational messages. You can review these
                    requests and choose the ones that resonate with you. This
                    allows you to ensure that every interaction is meaningful
                    and genuine.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Connect with Fans:</h5>
                  <p className="m-0">
                    Engage with your fans through one-on-one chats, create
                    personalized video messages, or share exclusive content.
                    Offer advice, share stories, and motivate your followers to
                    achieve their goals
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Get Paid Securely</h5>
                  <p className="m-0">
                    Your earnings are securely processed, and you can withdraw
                    your funds whenever you like. We provide various payment
                    options to make it easy for you to access your income.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div style={{ width: "60px", height: "60px" }}></div>
                  <h5 className="mb-3">Inspire and Make a Difference</h5>
                  <p className="m-0">
                    By joining our platform, you're not only earning a
                    substantial income but also inspiring and positively
                    impacting the lives of your fans. Your wisdom and guidance
                    can help individuals pursue their dreams and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <h1>Register With Us Now</h1>
              <p>
                Join us today and become a part of a community that connects
                celebrities with their admirers, all while helping you monetize
                your influence and make a genuine difference in the lives of
                your fans
              </p>
            </div>
            <Register />
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={img9}
                />
               
              </div>
              
              
             
            </div>
          </div>
          
        </div>
      </div>
    
    </div>

   
  );
}

export default CelebSignup;
