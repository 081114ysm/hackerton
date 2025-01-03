import React from "react";
import profileImage from "../assets/images/profile.jpg"; // Adjust the path as necessary

const MyPage = () => {
  const bigBoxStyle = {
    width: "80%",
    height: "600px",
    margin: "30px auto",
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "10px",
    display: "flex",
  };

  const userImageStyle = {
    width: "200px",
    height: "200px",
    backgroundImage: `url(${profileImage})`, // Use template literals for dynamic URLs
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "60px auto",
  };

  const userAlterStyle = {
    width: "50%",
    backgroundColor: "#fff",
    height: "500px",
    borderRadius: "20px",
    margin: "50px auto",
    border: "1px solid #000",
  };

  return (
    <div>
      <div style={bigBoxStyle}>
        <div style={userImageStyle}></div>
        <div style={userAlterStyle}></div>
      </div>
    </div>
  );
};

export default MyPage;
