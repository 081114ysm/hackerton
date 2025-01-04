import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";

const UserFigure = styled.div`
  width: 520px;
  height: 300px;
  background: #000;
  position: absolute;
  top: 2%;
  left: 23%;
`;

const MyFigure = styled.div`
  width: 520px;
  height: 300px;
  background: #000;
  position: absolute;
  top: 2%;
  left: 60%;
`;

const ChatContainer = styled.div`
  width: 1070px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #555;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 45%;
  left: 23%;
  overflow: hidden;
`;

const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-right: 50px;
  padding-top: 30px;
`;

const PlusIcon = styled.div`
  position: fixed;
  top: 47%;
  left: 24.3%;
  font-size: 28px;
  color: #007bff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #0056b3;
  }
`;

const Message = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  align-self: flex-end;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  width: 1090px;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 5px;
  position: absolute;
  top: 90%;
  left: 23%;
  background-color: #fff;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px 0 0 5px;
`;

const SendButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 100%;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -15px;

  &:hover {
    background-color: #0056b3;
  }
`;

const VideoChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={{ backgroundColor: "#333", margin: 0, minHeight: "100vh" }}>
      <UserFigure></UserFigure>
      <MyFigure></MyFigure>
      <ChatContainer>
        <MessagesContainer>
          <PlusIcon>
            <FontAwesomeIcon icon={faPlus} />
          </PlusIcon>
          {messages.map((msg, index) => (
            <Message key={index}>{msg}</Message>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
      </ChatContainer>

      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="실시간으로 채팅하기"
        />
        <SendButton onClick={handleSendMessage}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </SendButton>
      </InputContainer>
    </div>
  );
};

export default VideoChat;
