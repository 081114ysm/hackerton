import React from "react";

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
      <div style={{ color: "whitesmoke" }}>User</div>
    </div>
  );
};

export default Profile;
