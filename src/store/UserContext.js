// UserContext.js
import React, { createContext, useContext } from "react";

// Create a User Context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // Mock user data (replace with actual data fetching logic)
  const user = {
    username: "",
    followingCount: 0,
    followerCount: 0,
    country: "",
    ageRange: "",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// Custom hook to use the User Context
export const useUser = () => {
  return useContext(UserContext);
};
