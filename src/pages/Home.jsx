// Home.jsx
import React from "react";
import { useEffect } from "react";

const Home = () => {
  const mypageContainer = {
    margin: "0",
    width: "100%",
    height: "120.8vh",
    textAlign: "center",
    background: "linear-gradient(to right, #3D5AB8, #8398DC)",
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const mainTitle = {
    padding: "23% 0 20px 0 ",
    fontSize: "50px",
    fontWeight: "bold",
  };

  const serveTitle = {
    fontSize: "20px",
  };
  return (
    <div style={mypageContainer}>
      <div style={mainTitle}>
        Welcome to Real-time translation video CHAT !!
      </div>
      <div style={serveTitle}>
        Do you find it difficult to video chat with foreigners?
      </div>
      <div style={serveTitle}>
        Achieve smooth communication with diverse cultures through real-time
        translation!
      </div>
    </div>
  );
};

export default Home;
