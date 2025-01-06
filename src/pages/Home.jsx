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
  background: linear-gradient(to right, #3d5ab8, rgb(150, 166, 220));
`;

const MainTitle = styled.div`
  padding: 15% 0 30px 10%;
  font-size: 55px;
  font-weight: bold;
  color: #111;
  font-family: "LeferiPoint-SpecialItalicA";
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 적당한 그림자 추가 */
`;

const ServeTitle = styled.div`
  padding-left: 10%;
  font-size: 20px;
  color: #111;
  font-family: "GowunDodum-Regular";
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 적당한 그림자 추가 */
`;

const StartButton = styled.button`
  position: relative; /* 상대 위치 설정 */
  margin-left: 10%; /* 오타 수정: 'argin-left'를 'margin-left'로 수정 */
  background-color: #feb3aa; /* 기본 배경색 */
  padding: 15px 30px;
  border: none;
  border-radius: 10px; /* 모서리 둥글게 */
  margin: 30px 0 0 100px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  font-family: "LeferiPoint-SpecialItalicA";

  /* 박스 같은 느낌을 주기 위한 그림자 */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2),
    /* 외부 그림자 */ inset 0 -70px 1px rgba(255, 255, 255, 0.13); /* 내부 그림자 추가 */

  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease; /* 변형 효과 추가 */

  &:hover {
    background-color: #feb3aa; /* 호버 시 더 진한 색으로 변경 */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3),
      /* 호버 시 그림자 강화 */ inset 0 -1px 4px rgba(255, 255, 255, 0.7); /* 내부 그림자 강화 */
    transform: translateY(-2px); /* 마우스 오버 시 약간 위로 이동 */

    &:active {
      transform: translateY(1px); /* 눌렀을 때 약간 아래로 이동 */
      box-shadow: inset 0 -1px 4px rgba(255, 255, 255, 0.2),
        /* 내부 그림자 유지 */ none; /* 외부 그림자 제거 */
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();

  // 로그인 페이지로 이동
  const handleStartChat = () => {
    navigate("/login"); // 로그인 페이지로 이동하도록 수정
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
