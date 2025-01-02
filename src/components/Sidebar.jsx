import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "Add as Friends", path: "/add-friends" },
    { name: "Exit", path: "/exit" },
    { name: "Match again", path: "/match-again" },
    { name: "Report", path: "/report" },
    { name: "Settings", path: "/settings" },
  ];

  const sidebarStyle = {
    width: "200px",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "10% 30px 0 30px",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const linkStyle = (index) => ({
    display: "block",
    margin: "10px 0",
    textDecoration: "none",
    color: hoveredIndex === index ? "blue" : "black",
    fontSize: "20px",
    marginBottom: "20%",
  });

  return (
    <div style={sidebarStyle}>
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          style={linkStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
