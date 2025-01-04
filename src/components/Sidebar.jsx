import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
  position: fixed; /* 고정 위치 설정 */
  top: 0; /* 상단에 위치 */
  left: 0; /* 왼쪽에 위치 */
  margin: 0;
  width: 200px;
  height: 100vh; /* 전체 높이 */
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
    color: #fbceb1; // 마우스 오버 시 색상 변경
  }
`;

const IconWrapper = styled.span`
  margin: 0 20px 0 10px;
`;

const Sidebar = () => {
  const menus = [
    { name: "Home", path: "/", icon: faHouse },
    { name: "Add as Friends", path: "/add-friends", icon: faUserPlus },
    { name: "Exit", path: "/exit", icon: faRightFromBracket },
    { name: "Match again", path: "/match-again", icon: faShuffle },
    { name: "Complaint", path: "/complaint", icon: faTriangleExclamation },
    { name: "Settings", path: "/settings", icon: faGear },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 현재 경로 가져오기
  const location = useLocation();

  // 로그인 페이지 경로 확인
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  // 로그인 페이지가 아닐 때만 사이드바 렌더링
  if (isLoginPage || isSignupPage) {
    return null; // 로그인 페이지에서는 사이드바를 렌더링하지 않음
  }

  return (
    <SidebarContainer>
      <Profile />
      {menus.map((menu, index) => (
        <StyledNavLink
          key={index}
          to={menu.path}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={menu.icon} />
          </IconWrapper>
          {menu.name}
        </StyledNavLink>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
