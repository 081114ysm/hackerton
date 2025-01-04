// Videochat.jsx
import React from "react";
import styled from "styled-components";

const OtherPeople = styled.div`
  width: 80%;
  height: 600px;
  margin: 90px auto;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
`;

const VideoChat = () => {
  return (
    <div>
      <OtherPeople></OtherPeople>
      <Mine>asdda</Mine>
    </div>
  );
};

export default VideoChat;
