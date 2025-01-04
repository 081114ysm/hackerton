import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserPlus,
  faRightFromBracket,
  faShuffle,
  faTriangleExclamation,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

// Styled components 정의
const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 200px;
  height: 100vh;
  background-color: #3d5ab8;
  padding: 5% 30px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: ${({ isHovered }) => (isHovered ? "#FBCEB1" : "whitesmoke")};
  font-size: 20px;
  margin-bottom: 20%;
  font-family: "GowunDodum-Regular";

  &:hover {
    color: #fbceb1;
  }
`;

const IconWrapper = styled.span`
  margin: 0 20px 0 10px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  width: 350px;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: "GowunDodum-Regular", sans-serif;
  margin-left: -50px;
`;

const PopupTitle = styled.h3`
  font-size: 22px;
  color: #3d5ab8;
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 20vh;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 5%;
  resize: none;
  outline: none;

  &:focus {
    border-color: #3d5ab8;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #3d5ab8;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c4a9d;
  }

  &:focus {
    outline: none;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFriendAdded, setIsFriendAdded] = useState(false);

  // 로그인/회원가입 페이지에서는 사이드바 숨김
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  // Complaint 팝업 핸들러
  const handleComplaintClick = () => setIsPopupOpen(true);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    alert("신고되었습니다.");
  };

  // Add as Friends 핸들러
  const handleAddFriendClick = () => {
    if (isFriendAdded) {
      alert("이미 친구입니다.");
    } else {
      setIsFriendAdded(true);
      alert("친구가 추가되었습니다.");
    }
  };

  // Exit 핸들러
  const handleExitClick = () => {
    const confirmExit = window.confirm("정말로 나가시겠습니까?");
    if (confirmExit) {
      navigate("/login");
    }
  };

  const menus = [
    { name: "Home", path: "/", icon: faHouse },
    { name: "Add as Friends", path: "/", icon: faUserPlus, action: handleAddFriendClick },
    { name: "Exit", path: "/login", icon: faRightFromBracket, action: handleExitClick },
    { name: "Match again", path: "/match-again", icon: faShuffle },
    { name: "Complaint", path: "/complaint", icon: faTriangleExclamation, action: handleComplaintClick },
    { name: "Settings", path: "/settings", icon: faGear },
  ];

  return (
    <SidebarContainer>
      <Profile />
      {menus.map((menu, index) => (
        <StyledNavLink
          key={index}
          to={menu.path}
          isHovered={hoveredIndex === index}
          onClick={menu.action}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={menu.icon} />
          </IconWrapper>
          {menu.name}
        </StyledNavLink>
      ))}

      {isPopupOpen && (
        <PopupOverlay>
          <Popup>
            <PopupTitle>신고 사유</PopupTitle>
            <Textarea placeholder="사유 입력" />
            <Button onClick={handleClosePopup}>신고</Button>
          </Popup>
        </PopupOverlay>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
