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
  transition: color 0.2s ease;
  font-size: 20px;
  margin-bottom: 20%;
  font-family: "GowunDodum-Regular";
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
`;

const PopupTitle = styled.h3`
  font-size: 22px;
  color: #3d5ab8;
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
  padding: 12px;
  background-color: #3d5ab8;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: bg-color 0.3s ease;

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

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleComplaintClick = () => {
    if (location.pathname === "/videochat") {
      setIsPopupOpen(true);
    } else {
      alert("화상 채팅중이 아닙니다.");
    }
  };

  const handleComplaintSubmit = () => {
    setIsPopupOpen(false);
    alert("신고되었습니다."); // 신고 완료
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    alert("신고가 취소되었습니다."); // 신고 취소
  };

  const handleAddFriendClick = () => {
    if (location.pathname === "/videochat") {
      if (isFriendAdded) {
        alert("이미 친구입니다.");
      } else {
        setIsFriendAdded(true);
        alert("친구가 추가되었습니다.");
      }
    } else {
      alert("화상 채팅중이 아닙니다.");
    }
  };

  const handleExitClick = () => {
    if (location.pathname === "/videochat") {
      const confirmExit = window.confirm("정말로 나가시겠습니까?");
      if (confirmExit) {
        navigate("/login");
      }
    } else {
      alert("화상 채팅중이 아닙니다.");
    }
  };

  const menus = [
    { name: "Home", path: "/", icon: faHouse },
    {
      name: "Add as Friends",
      path: "/videochat",
      icon: faUserPlus,
      action: handleAddFriendClick,
      isClickable: true,
    },
    {
      name: "Exit",
      path: "/login",
      icon: faRightFromBracket,
      action: handleExitClick,
      isClickable: true,
    },
    { name: "Match again", path: "/match-again", icon: faShuffle },
    {
      name: "Complaint",
      path: "/complaint",
      icon: faTriangleExclamation,
      action: handleComplaintClick,
      isClickable: true,
    },
    { name: "Settings", path: "/settings", icon: faGear },
  ];

  return (
    <SidebarContainer>
      <Profile />
      {menus.map((menu, index) => (
        <StyledNavLink
          key={index}
          to={menu.isClickable ? "#" : menu.path} // Prevent navigation for clickable actions
          isHovered={hoveredIndex === index}
          onClick={menu.isClickable ? menu.action : undefined} // Call action only for clickable items
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
            <Button onClick={handleComplaintSubmit}>신고</Button>
            <Button onClick={handleClosePopup}>닫기</Button>
          </Popup>
        </PopupOverlay>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
