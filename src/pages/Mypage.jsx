import React from "react";
import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";


const BigBoxStyle = styled.div`
  width: 80%;
  height: 600px;
  margin: 30px auto;
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
`

const UserAlter = styled.div`
  width: 50%;
  background-color: #fff;
  height: 500px;
  border-radius: 20px;
  margin: 50px auto;
  border: 1px solid #000;
`;

const MyPage = () => {
  return (
    <div>
      <BigBoxStyle>
        <UserImage></UserImage>
        <UserAlter></UserAlter>
      </BigBoxStyle>
    </div>
  );
};

export default MyPage;
