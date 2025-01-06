import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import profileImage from "../assets/images/profile.jpg";
import { useUser } from "../store/UserContext";
import "../assets/fonts/fonts.css";

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
  font-size: 20px;
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

const Label = styled.label`
  font-size: 16px;
  margin-right: 10px;
  color: #333;
  font-family: "GowunDodum-Regular";
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
  font-family: "GowunDodum-Regular";
  &:hover {
    background-color: #2c4a9d;
  }
`;

const Select = styled.select`
  width: 75%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-left: -89px;
`;

const Select1 = styled.select`
  width: 75%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-left: -50px;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-left: -50px;
`;

const MyPage = () => {
  const navigate = useNavigate();
  // const { isLoggedIn } = useUser();

  // React.useEffect(() => {
  //   if (!isLoggedIn) {
  //     alert("로그인 해주세요");
  //     navigate("/login");
  //   }
  // }, [isLoggedIn, navigate]);

  const {
    username: initialUsername,
    followingCount,
    followerCount,
    country: initialCountry,
    ageRange,
  } = useUser();
  const [selectedImage, setSelectedImage] = useState(profileImage);
  const [username, setUsername] = useState(initialUsername);
  const [country, setCountry] = useState(initialCountry);
  const [age, setAge] = useState(ageRange);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleUsernameChange = () => {
    if (username) {
      alert(`사용자 이름이 ${username}(으)로 변경되었습니다.`);
    } else {
      alert("새 사용자 이름을 입력해주세요.");
    }
  };

  const handleCountryChange = () => {
    if (country) {
      alert(`국가가 ${country}로 변경되었습니다.`);
    } else {
      alert("국가를 선택해주세요.");
    }
  };

  const handleAgeChange = () => {
    if (age) {
      alert(`나이대가 ${age}로 변경되었습니다.`);
    } else {
      alert("나이대를 선택해주세요.");
    }
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
    <div
      style={{
        backgroundColor: "#333",
        margin: 0,
        fontFamily: "GowunDodum-Regular",
      }}
    >
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
              <p>Country: {country}</p>
              <p>Age Range: {age}</p>
            </UserDetails>
          </div>

          <UserAlter>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              Setting
            </h3>
            <InputGroup>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter new username"
              />
              <Button onClick={handleUsernameChange}>Change Username</Button>
            </InputGroup>
            <InputGroup>
              <Select1
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select your country</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="GBR">United Kingdom</option>
                <option value="AUS">Australia</option>
                <option value="DEU">Germany</option>
                <option value="FRA">France</option>
                <option value="IND">India</option>
                <option value="JPN">Japan</option>
                <option value="BRA">Brazil</option>
                <option value="ZAF">South Africa</option>
                <option value="ITA">Italy</option>
                <option value="MEX">Mexico</option>
                <option value="ESP">Spain</option>
                <option value="NGA">Nigeria</option>
                <option value="IDN">Indonesia</option>
                <option value="PHL">Philippines</option>
                <option value="RUS">Russia</option>
                <option value="KOR">South Korea</option>
                <option value="SGP">Singapore</option>
                <option value="THA">Thailand</option>
                <option value="VN">Vietnam</option>
                <option value="TUR">Turkey</option>
              </Select1>
              <Button onClick={handleCountryChange}>Change Country</Button>
            </InputGroup>

            <InputGroup>
              <Label htmlFor="age">Age</Label>
              <Select
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="">Select your age group</option>
                <option value="10-19">10-19</option>
                <option value="20-29">20-29</option>
                <option value="30-39">30-39</option>
                <option value="40-49">40-49</option>
                <option value="50-59">50-59</option>
                <option value="60+">60+</option>
              </Select>
              <Button onClick={handleAgeChange}>Change Age</Button>
            </InputGroup>

            <InputGroup>
              <Input type="file" onChange={handleImageChange} />
              <Button>Change Profile</Button>
            </InputGroup>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleMemberChange}
                style={{
                  backgroundColor: "#6B83D0",
                  marginTop: "150px",
                  marginLeft: "70px",
                  display: "inline-block",
                  width: "30%",
                }}
              >
                User Change
              </Button>
              <Button
                onClick={handleDeleteAccount}
                style={{
                  backgroundColor: "#6B83D0",
                  marginTop: "150px",
                  marginRight: "70px",
                  display: "inline-block",
                  width: "30%",
                }}
              >
                User Out
              </Button>
            </div>
          </UserAlter>
        </BigBox>
      </div>
    </div>
  );
};

export default MyPage;
