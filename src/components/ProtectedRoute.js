import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    // Redirect to the "/Decide" route if the user is not logged in
    return <Navigate to="/Decide" />;
  }

  // Render the protected content if the user is logged in
  return children;
};

export default ProtectedRoute;
