import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";
import { useUser } from "../store/UserContext";

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
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 100%;
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
  margin-top: 30px;
  margin-left: 100px;
  border: 1px solid #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 0px 50px;
`;

const Button = styled.button`
  width: auto;
  padding: 10px 15px;
  margin-left: 10px;
  background-color: #3d5ab8;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c4a9d;
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const { username, followingCount, followerCount, country: initialCountry, ageRange } = useUser();
  const [selectedImage, setSelectedImage] = useState(profileImage);
  const [countryInput, setCountryInput] = useState(initialCountry);
  const [ageInput, setAgeInput] = useState(ageRange);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleCountryChange = () => {
    alert(`국가가 ${countryInput || initialCountry}로 변경되었습니다.`);
  };

  const handleAgeChange = () => {
    alert(`나이가 ${ageInput || ageRange}로 변경되었습니다.`);
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("정말로 계정을 삭제하시겠습니까?");
    if (confirmDelete) {
      alert("계정이 삭제되었습니다.");
      navigate("/login");
    }
  };

  const handleMemberChange = () => {
    navigate("/login");
  };

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
            <UserImage image={selectedImage} />
            <UserDetails>
              <h2>{username}</h2>
              <p>Following: {followingCount}</p>
              <p>Followers: {followerCount}</p>
              <p>Country: {countryInput || initialCountry}</p>
              <p>Age Range: {ageInput}</p>
            </UserDetails>
          </div>

          <UserAlter>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Setting</h3>

            <InputGroup>
              <Input
                type="text"
                value={countryInput}
                onChange={(e) => setCountryInput(e.target.value)}
                placeholder="새 국가 입력"
              />
              <Button onClick={handleCountryChange}>국가 변경</Button>
            </InputGroup>

            <InputGroup>
              <Input
                type="text"
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                placeholder="새 나이 입력"
              />
              <Button onClick={handleAgeChange}>나이 변경</Button>
            </InputGroup>

            <InputGroup>
              <Input type="file" onChange={handleImageChange} />
              <Button>사진 변경</Button>
            </InputGroup>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleMemberChange}
                style={{
                  backgroundColor: "#5cb85c",
                  marginTop: "150px",
                  marginLeft: "70px",
                  display: "inline-block",
                  width: "30%",
                }}
              >
                회원 변경
              </Button>
              <Button
                onClick={handleDeleteAccount}
                style={{
                  backgroundColor: "#d9534f",
                  marginTop: "150px",
                  marginRight: "70px",
                  display: "inline-block",
                  width: "30%",
                }}
              >
                회원 탈퇴
              </Button>
            </div>
          </UserAlter>
        </BigBox>
      </div>
    </div>
  );
};

export default MyPage;
