import React, { useState } from "react";
import "./dev-sidebar.module.css";
import { Link } from "react-router-dom";

export const DevSidebar = () => {
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
    <div className="sidenav" style={{ width: "180px" }}>
      <Link
        to="./home"
        className="sidebar-link"
        style={{ color: "white" }}
        onClick={() => toggleDropdown("home")}
      >
        Apps
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
        Account
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
        Upload{" "}
      </Link>
      <Link to="/chatroom" className="sidebar-link" style={{ color: "white" }}>
        Messages
      </Link>
      <Link to="/support" className="sidebar-link" style={{ color: "white" }}>
        Security
      </Link>
      <Link to="/support" className="sidebar-link" style={{ color: "white" }}>
        Support
      </Link>
      <Link to="/support" className="sidebar-link" style={{ color: "white" }}>
        Settings
      </Link>
    </div>
  );
};

export default DevSidebar;
