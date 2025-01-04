import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const LoginContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginForm = styled.div`
  margin: 5% 25%;
  padding: 5%;
  width: 30vw;
  height: auto;
  border: 2px solid #bdc5dd;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #3d5ab8;
  margin: 10% 0;
  font-size: 30px;
  font-family: "GowunDodum-Regular";
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-family: "GowunDodum-Regular";
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #bdc5dd;
  font-family: "GowunDodum-Regular";

  &:focus {
    outline: none;
    border-color: #3d5ab8;
    box-shadow: 0 0 5px rgba(61, 90, 184, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const Button = styled.button`
  width: auto;
  padding: 10px;
  width: calc(50% - 5px); // Adjusted to account for gap
  background-color: #3d5ab8;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-family: "GowunDodum-Regular";

  &:hover {
    background-color: #2c4a9d;
    transition: background-color 0.3s ease;
  }
`;

const SignUpButton = styled(Button)`
  background-color: #feb3aa;

  &:hover {
    background-color: #f08c7b;
    transition: bg-color 0.3s ease;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulate a successful login
    if (!username || !password) {
      alert("Please enter both username and password."); // Simple error handling
      return; // Early return only if validation fails
    }
    navigate("/videochat"); // Navigate to video chat on successful login
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <ButtonContainer>
          <Button onClick={handleLogin}>Login</Button>
          <SignUpButton onClick={() => navigate("/signup")}>
            Sign Up
          </SignUpButton>
        </ButtonContainer>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
