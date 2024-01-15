import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {UserAuthContextProvider } from "./components/context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Decide from "./components/Decide";
import Login from "./components/Login";
import CelebSignup from "./components/Celebritysignup";
import Register from "./components/Signup";
import Landingpage from "./components/Landingpage";
import PrivacyPolicy from "./components/Privacy";
import Terms from "./components/Terms";
import Dashboard from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/Profile";
import Wallet from "./components/Wallet"




function App() {
  return (
  <UserAuthContextProvider>
      <Routes>
      <Route path="/Dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/Decide" element={<Decide />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/CelebritySignup" element={<CelebSignup />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Profile" element={<Profile />} />
        
        <Route path="/Wallet" element={<Wallet/>} />
        
      
      </Routes>
      </UserAuthContextProvider>
   
  );
}

export default App;
