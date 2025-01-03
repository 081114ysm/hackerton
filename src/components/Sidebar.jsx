import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const menus = [
    { name: "Home", path: "/", icon: faHouse },
    { name: "Add as Friends", path: "/add-friends", icon: faUserPlus },
    { name: "Exit", path: "/exit", icon: faRightFromBracket },
    { name: "Match again", path: "/match-again", icon: faShuffle },
    { name: "Complaint", path: "/complaint", icon: faTriangleExclamation },
    { name: "Settings", path: "/settings", icon: faGear },
  ];

  const sidebarStyle = {
    margin: "0",
    width: "200px",
    height: "100vh",
    backgroundColor: "#3D5AB8",
    padding: "5% 30px ",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const linkStyle = (index) => ({
    display: "block",
    margin: "10px 0",
    textDecoration: "none",
    color: hoveredIndex === index ? "#FBCEB1" : "whitesmoke",
    fontSize: "20px",
    marginBottom: "20%",
  });

  return (
    <div style={sidebarStyle}>
      <Profile />
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          style={linkStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <FontAwesomeIcon
            icon={menu.icon}
            style={{ margin: "0 20px 0 10px" }}
          />
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
