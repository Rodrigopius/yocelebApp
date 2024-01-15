import React from "react";
import { Link } from "react-router-dom";
import Images  from "./ImageCards";

import img1 from "../img/about.png";
import img2 from "../img/screenshot-1.png";
import img3 from "../img/screenshot-2.png";
import img4 from "../img/screenshot-3.png";
import img5 from "../img/screenshot-4.png";
import img6 from "../img/screenshot-5.png";
import img7 from "../img/bg-top.png";
import img8 from "../img/screenshot-frame.png";
import img9 from '../img/fun1.jpg';
import img10 from '../img/fun2.jpg';
import img11 from '../img/fun3.jpg';
import img12 from '../img/fun4.jpg';
import img13 from '../img/fun5.jpg';


function Landingpage() {
  return (
    <div
      className="app"
      data-bs-spy="scroll"
      data-bs-target=".navbar"
      data-bs-offset="51"
    >
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0" id="home">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"  >
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
                
                <div  className="nav-item nav-link">
                <Link  to="/Dashboard">
                Dashboard
                </Link>
                 
                </div>
              </div>
              <div className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
                <Link style={{ color: "white" }} to="/Decide">
                  Get Started
                </Link>
              </div>
            </div>
          </nav>

          <div className="container-xxl bg-primary hero-header"   style={{paddingBottom:'20vh'}}>
            <div className="container px-lg-5">
              <div className="row g-5">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">
                    The Revolutionary App That Helps To Meet Your Best Role
                    Models Who Inspire You
                  </h1>
                  <p className="text-white pb-3 animated slideInDown">
                    Welcome to YoCeleb: Your Connection to Celebrities and Role
                    Models YoCeleb is your exclusive portal to connect with the
                    world's most admired celebrities and role models. Dive into
                    the unique opportunity to engage in personal conversations,
                    receive mentorship, and draw inspiration directly from the
                    individuals who've made a significant impact in their
                    respective fields. Unleash your potential and embark on a
                    transformative journey with YoCeleb today!
                  </p>
                  <div
                    class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft"
                    style={{ background: "rgba(167, 139, 250, 1)" }}
                  >
                    <Link style={{ color: "white" }} to="/Decide">
                      Get Started
                    </Link>
                  </div>

                </div>
                <div
                  className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
                  data-wow-delay="0.3s">

                    <div >
                    <img
                    style={{ borderRadius: "20px", width: "200vh" }}
                    className="img-fluid"
                    src={img2}
                    alt="Yoceleb"
                  />
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5" id="about">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">About App</h5>
                <h1 className="mb-4">#1 About Yoceleb Platform</h1>
                <p className="mb-4">
                  We believe in the power of personal connections and the impact
                  of mentorship and inspiration. Our mission is to bridge the
                  gap between admirers and their role models, providing a
                  platform where you can:
                  <br />
                  Connect Directly: YoCeleb offers a unique opportunity for
                  users to have one-on-one interactions with their favorite
                  celebrities and role models.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="d-flex">
                      <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                      <div className="ms-3">
                        <h2 className="mb-0" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="text-primary-gradient mb-0">
                          Active Install
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="d-flex">
                      <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                      <div className="ms-3">
                        <h2 className="mb-0" data-toggle="counter-up">
                          1234
                        </h2>
                        <p className="text-secondary-gradient mb-0">
                          Clients Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href=""
                  className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.5s"
                  src={img1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5" id="feature">
          <div className="container py-5 px-lg-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium">App Features</h5>
              <h1 className="mb-5">Awesome Features</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-eye text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">High Resolution</h5>
                  <p className="m-0">
                    YoCeleb ensures a visually stunning and immersive experience
                    with high-resolution content that brings you closer to your
                    role models. Enjoy crystal-clear images, videos, and live
                    interactions, making every moment with your idols truly
                    exceptional.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-layer-group text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">Retina Ready</h5>
                  <p className="m-0">
                    YoCeleb is designed to be Retina Ready, ensuring that your
                    visual content is displayed with exceptional clarity and
                    sharpness. Whether you're browsing images, videos, or
                    engaging in live conversations, your screen will showcase
                    every detail in stunning precision for an enhanced user
                    experience.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-edit text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">Editable Data</h5>
                  <p className="m-0">
                    Your experience on YoCeleb is tailored to your preferences.
                    With our user-friendly interface, you have the power to edit
                    and manage your data effortlessly. Whether it's updating
                    your profile information, modifying your conversation
                    history, or fine-tuning your content preferences, we put
                    control in your hands. Your data, your way, for a truly
                    personalized and adaptable experience on YoCeleb.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-shield-alt text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">Fully Secured</h5>
                  <p className="m-0">
                    Your security and privacy are our top priorities. Our
                    platform is fortified with state-of-the-art security
                    measures to safeguard your personal information and
                    interactions. Rest assured that your data is encrypted, and
                    stringent privacy controls are in place to provide you with
                    a safe and trustworthy environment for your meaningful
                    connections and mentorship experiences. Your peace of mind
                    is our commitment.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-cloud text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">Cloud Storage</h5>
                  <p className="m-0">
                    YoCeleb leverages cutting-edge cloud storage solutions to
                    ensure seamless access to your cherished interactions and
                    content. With our reliable and scalable cloud
                    infrastructure, you can conveniently retrieve and store your
                    conversations, videos, and memories, anytime, anywhere. Say
                    goodbye to storage limitations and hello to an accessible
                    digital treasure trove. Your journey with your role models
                    is securely preserved in the cloud, ready to inspire you at
                    your convenience.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="feature-item bg-light rounded p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-mobile-alt text-white fs-4"></i>
                  </div>
                  <h5 className="mb-3">Fully Responsive</h5>
                  <p className="m-0">
                    YoCeleb is designed with your convenience in mind. Our
                    platform is fully responsive, adapting effortlessly to any
                    screen size or device. Whether you're accessing YoCeleb from
                    a desktop, tablet, or mobile phone, you'll enjoy a seamless
                    and user-friendly experience. Stay connected with your role
                    models and access inspiration on the go, wherever you are.
                    Your journey with YoCeleb is at your fingertips, no matter
                    the device you choose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="text-primary-gradient fw-medium">Screenshot</h5>
                <h1 className="mb-4">
                  User Friendly interface And Very Easy To Use Chat Application
                </h1>
                <p className="mb-4">
                  At YoCeleb, simplicity and user-friendliness are at the core
                  of our design. Navigating our platform is a breeze, even for
                  newcomers. Our intuitive interface ensures that you can
                  effortlessly connect with your role models, access
                  inspiration, and manage your interactions with ease. No steep
                  learning curve required. Your journey with YoCeleb is a
                  delightful, user-friendly experience, where your focus remains
                  on connecting, learning, and growing, rather than struggling
                  with technology.
                </p>
              </div>
              <div
                className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="owl-carousel screenshot-carousel">
                  <img className="img-fluid" src={img2} alt="Yoceleb" />
                  <img className="img-fluid" src={img2} alt="Yoceleb" />
                  <img className="img-fluid" src={img2} alt="Yoceleb" />
                  <img className="img-fluid" src={img5} alt="Yoceleb" />
                  <img className="img-fluid" src={img6} alt="Yoceleb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div
              className="text-center pb-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5 className="text-primary-gradient fw-medium">How It Works</h5>
              <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fa fa-cog fa-3x text-white"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Install the App</h5>
                  <p className="mb-0"></p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fa fa-address-card fa-3x text-white"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Setup Your Profile</h5>
                  <p className="mb-0"></p>
                </div>
              </div>
              <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="fa fa-check fa-3x text-white"></i>
                  </div>
                  <h5 className="mt-4 mb-3">Enjoy The Features</h5>
                  <p className="mb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid wow fadeInUp"
                  data-wow-delay="0.1s"
                  src={img1}
                />
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h5 className="text-primary-gradient fw-medium">Download</h5>
                <h1 className="mb-4">Download The Latest Version Of Our App</h1>
                <p className="mb-4">
                  Stay connected and make the most of your YoCeleb experience by
                  downloading the latest version of our app. Accessible on both
                  Android and iOS platforms, you can find us on the Play Store
                  and App Store. Get the latest features, enhancements, and
                  security updates to ensure a seamless, secure, and
                  inspirational journey with your role models. Download now and
                  elevate your experience with YoCeleb.
                </p>
                <div className="row g-4">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <a
                      href=""
                      className="d-flex bg-primary-gradient rounded py-3 px-4"
                    >
                      <i className="fab fa-apple fa-3x text-white flex-shrink-0"></i>
                      <div className="ms-3">
                        <p className="text-white mb-0">Available On</p>
                        <h5 className="text-white mb-0">App Store</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <a
                      href=""
                      className="d-flex bg-secondary-gradient rounded py-3 px-4"
                    >
                      <i className="fab fa-android fa-3x text-white flex-shrink-0"></i>
                      <div className="ms-3">
                        <p className="text-white mb-0">Available On</p>
                        <h5 className="text-white mb-0">Play Store</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<Images/>

      
        <div className="container-xxl py-5" id="contact">
          <div className="container py-5 px-lg-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
              <h1 className="mb-5">Get In Touch!</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <p className="text-center mb-4">
                    Have a question or need assistance? Our support team is here
                    to help. Reach out to us via email, phone, or our online
                    contact form. We're just a message away, and we're committed
                    to providing you with the support you need. Your feedback
                    and inquiries are important to us.{" "}
                    <a href="https://htmlcodex.com/contact-form">
                      Download Now
                    </a>
                    .
                  </p>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "150px" }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button
                          className="btn btn-primary-gradient rounded-pill py-3 px-5"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container-fluid bg-primary text-light footer wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Address</h4>
                <p>
                  <i className="fa fa-map-marker-alt me-3"></i>Kampala Uganda
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3"></i>+256 703 750811
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>info@yoceleb.com
                </p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Quick Link</h4>
                <a className="btn btn-link" href="">
                  About Us
                </a>
                <a className="btn btn-link" href="">
                  Contact Us
                </a>
                <a className="btn btn-link" href="">
                  Privacy Policy
                </a>
               
                <div className="btn btn-link" href="">
                <Link  to="/Terms">
              Terms Of Service
                </Link>
                  
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Popular Link</h4>
                <a className="btn btn-link" href="">
                  About Us
                </a>
                <a className="btn btn-link" href="">
                  Contact Us
                </a>
                <div className="btn btn-link" href="">
                <Link  to="/Privacy">
                Privacy Policy
                </Link>
                  
                </div>
                <a className="btn btn-link" href="">
                  Terms & Condition
                </a>
                <a className="btn btn-link" href="">
                  Career
                </a>
              </div>
              <div className="col-md-6 col-lg-3">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p>
                  Stay in the loop and never miss out on the latest updates,
                  celebrity interactions, and exclusive content. Subscribe to
                  our newsletter to receive regular news and inspiration
                  directly in your inbox.{" "}
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Your Email"
                    style={{ height: "48px" }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fa fa-paper-plane text-primary-gradient fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;{" "}
                  <a className="border-bottom" href="#">
                    Yoceleb
                  </a>
                  , All Right Reserved. 
                 
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="btn btn-lg btn-lg-square back-to-top pt-2">
          <i className="bi bi-arrow-up text-white"></i>
        </a>
      </div>
    </div>
  );
}

export default Landingpage;
