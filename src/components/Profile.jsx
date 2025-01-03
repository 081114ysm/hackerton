import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ marginBottom: "30%", textAlign: "center" }}>
      <img
        src={require("../assets/images/profile.jpg")}
        alt="Profile"
        style={{
          borderRadius: "50%",
          marginBottom: "5%",
          width: "100px",
          height: "100px",
        }}
      />
      <Link
        to="/mypage"
        style={{
          color: "whitesmoke",
          cursor: "pointer",
          textDecoration: "none",
          display: "block",
          fontFamily: "GowunDodum-Regular",
        }}
      >
        User
      </Link>
    </div>
  );
};

export default Profile;
