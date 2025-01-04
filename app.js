import React from "react";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import MyPage from "./components/MyPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/videochat" element={<MyPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
