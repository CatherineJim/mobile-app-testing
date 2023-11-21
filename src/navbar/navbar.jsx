import React from "react";
import Style from "./navbar.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  line-height: 35px;
`;
export const LoginButton = styled.button`
  width: 90px;
  height: 40px;
  background-color: white;
  color: black;
`;
export const Navbar = () => {
  return (
    <div className="nav" style={{ backgroundColor: "black" }}>
      <div className="logo">
        <h2>BetaApp</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/home" style={{ color: "white" }}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" style={{ color: "white" }}>
              My Dashboard
            </NavLink>
          </li>

          {/* <li>
            <NavLink to="/testpage">My Tests</NavLink>
          </li> */}

          <li>
            <NavLink to={"/community"} style={{ color: "white" }}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to={"/community"} style={{ color: "white" }}>
              Support
            </NavLink>
          </li>
        </ul>
      </div>
      <div style={{ lineHeight: "10px" }}>
        <LoginButton>
          <NavLink to="/login" style={{ color: "black" }}>
            Login
          </NavLink>
        </LoginButton>
      </div>
    </div>
  );
};
