import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/fonts/fonts.css";

const Home = () => {
  const mypageContainer = {
    margin: "0",
    width: "100%",
    height: "120.8vh",
    textAlign: "center",
    background: "linear-gradient(to right, #3D5AB8, #8398DC)",
  };

  const mainTitle = {
    padding: "20% 0 20px 0 ",
    fontSize: "55px",
    fontWeight: "bold",
    color: "#111",
    fontFamily: "LeferiPoint-SpecialItalicA",
  };

  const serveTitle = {
    fontSize: "20px",
    color: "#111",
    fontFamily: "GowunDodum-Regular",
    fontWeight: "500",
  };

  const navigate = useNavigate();

  //videochat 으로 이동
  const handleStartChat = () => {
    navigate("/videochat");
  };

  const startButton = {
    backgroundColor: "#FEB3AA",
    padding: "15px 30px",
    border: "0",
    borderRadius: "10px",
    marginTop: "30px",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "LeferiPoint-SpecialItalicA",
  };

  return (
    <div style={mypageContainer}>
      <div className="titles">
        <div style={mainTitle}>
          Welcome to <br /> Real-time translation video CHAT !!
        </div>
        <div style={serveTitle}>
          Do you find it difficult to video chat with foreigners?
        </div>
        <div style={serveTitle}>
          Achieve smooth communication with diverse cultures through real-time
          translation!
        </div>
      </div>
      <button onClick={handleStartChat} style={startButton}>
        Start Chat!
      </button>
    </div>
  );
};

export default Home;
