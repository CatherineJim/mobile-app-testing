import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.h2`
  margin: 0;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const SearchBar = styled.input`
  width: 900px;
  height: 50px;
  background-color: white;
  color: black;
  border: none;
  padding: 5px;

  margin-top: 0px
  border-radius: 5px;
  font-size: 16px;
  ::placeholder {
    color: #666;
  }
`;

const DevNavbar = () => {
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <NavItems>{/* Removed the links */}</NavItems>
      <SearchBar type="text" placeholder="Search..." />
    </NavbarContainer>
  );
};

export default DevNavbar;
