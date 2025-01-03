import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../assets/fonts/fonts.css";

// Styled Components 정의
const MypageContainer = styled.div`
  margin: 0;
  padding-left: 10%;
  width: 90%;
  height: 100vh;
  text-align: center;
  background: linear-gradient(to right, #3d5ab8, #8398dc);
`;

const MainTitle = styled.div`
  padding: 15% 0 0 10%;
  font-size: 55px;
  font-weight: bold;
  color: #111;
  font-family: "LeferiPoint-SpecialItalicA";
`;

const ServeTitle = styled.div`
  padding-left: 10%;
  font-size: 20px;
  color: #111;
  font-family: "GowunDodum-Regular";
  font-weight: 500;
`;

const StartButton = styled.button`
  margin-left: 10%;
  background-color: #feb3aa;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  font-family: "LeferiPoint-SpecialItalicA";
`;

const Home = () => {
  const navigate = useNavigate();

  // videochat으로 이동
  const handleStartChat = () => {
    navigate("/videochat");
  };

  return (
    <MypageContainer>
      <div className="titles">
        <MainTitle>
          Welcome to <br /> Real-time translation video CHAT !!
        </MainTitle>
        <ServeTitle>
          Do you find it difficult to video chat with foreigners?
        </ServeTitle>
        <ServeTitle>
          Achieve smooth communication with diverse cultures through real-time
          translation!
        </ServeTitle>
      </div>
      <StartButton onClick={handleStartChat}>Start Chat!</StartButton>
    </MypageContainer>
  );
};

export default Home;
