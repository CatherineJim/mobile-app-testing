import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({
    home: false,
    profile: false,
  });

  const toggleDropdown = (link) => {
    setDropdowns({
      ...dropdowns,
      [link]: !dropdowns[link],
    });
  };

  return (
    <div className="sidenav">
      <Link
        to="./home"
        className="sidebar-link"
        style={{ color: "white" }}
        onClick={() => toggleDropdown("home")}
      >
        Home
        {dropdowns.home && (
          <div className="dropdown-content">
            <Link to="/testpage1" className="dropdown-link">
              Test 1
            </Link>
            <Link to="/testpage2" className="dropdown-link">
              Test 2
            </Link>
          </div>
        )}
      </Link>
      <Link
        to="/profile"
        className="sidebar-link"
        style={{ color: "white" }}
        onClick={() => toggleDropdown("profile")}
      >
        Profile
        {dropdowns.profile && (
          <div className="dropdown-content">
            <Link to="/profilePage1" className="dropdown-link">
              Profile Page 1
            </Link>
            <Link to="/profilePage2" className="dropdown-link">
              Profile Page 2
            </Link>
          </div>
        )}
      </Link>
      <Link to="/testpage" className="sidebar-link" style={{ color: "white" }}>
        My tests
      </Link>
      <Link to="/chatroom" className="sidebar-link" style={{ color: "white" }}>
        Chats
      </Link>
      <Link to="/support" className="sidebar-link" style={{ color: "white" }}>
        Support
      </Link>
    </div>
  );
};

export default Sidebar;
