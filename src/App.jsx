import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import VideoChat from "./pages/Videochat";
import MyPage from "./pages/Mypage";
import { UserProvider } from "./store/UserContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <UserProvider>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/videochat" element={<VideoChat />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;