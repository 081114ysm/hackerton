import React from "react";
import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";
import { useUser } from "../store/UserContext";

// Styled Components 정의
const BigBox = styled.div`
  width: 80%;
  height: 80vh;
  margin-left: 20%;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
`;

const UserImage = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${profileImage}); // 이미지 URL을 템플릿 리터럴로 사용
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 60px auto;
`;

const UserDetails = styled.div`
  text-align: center;
  color: #fff;
`;

const UserAlter = styled.div`
  width: 50%;
  background-color: #fff;
  height: 500px;
  border-radius: 20px;
  margin: 50px auto;
  border: 1px solid #fff;
`;

const MyPage = () => {
  const { username, followingCount, followerCount, country, ageRange } =
    useUser();

  return (
    <div style={{ backgroundColor: "#333", margin: 0 }}>
      <div style={{ padding: "5%" }}>
        <BigBox>
          <div
            style={{
              display: "flex",
              marginLeft: "10%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <UserImage />
            <UserDetails>
              <h2>{username}</h2>
              <p>Following: {followingCount}</p>
              <p>Followers: {followerCount}</p>
              <p>Country: {country}</p>
              <p>Age Range: {ageRange}</p>
            </UserDetails>
          </div>

          <UserAlter />
        </BigBox>
      </div>
    </div>
  );
};

export default MyPage;
