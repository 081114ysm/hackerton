import React from "react";
import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";


const BigBoxStyle = styled.div`
  width: 80%;
  height: 600px;
  margin: 90px auto;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
`;

const UserImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${profileImage});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 60px auto;
  position: relative; /* 상대적 위치 지정 */
  margin: 60px auto;
`
const UserAlter = styled.div`
  width: 50%;
  background-color: #fff;
  height: 500px;
  border-radius: 20px;
  margin: 50px auto;
  border: 1px solid #000;
`;
const Line = styled.div`
  width: 100%;
  height: 100px;
  border-top-right-radius:20px;
  border-top-left-radius:20px;
  border-bottom: 1px solid #000;
`;

const UserName = styled.h1`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  font-size: 24px;
  font-weight:600;
`;



const MyPage = () => {
  return (
    <div>
      <BigBoxStyle>
        <UserImage><UserName>UserName</UserName></UserImage>
        <UserAlter><Line></Line></UserAlter>
      </BigBoxStyle>
    </div>
  );
};

export default MyPage;
