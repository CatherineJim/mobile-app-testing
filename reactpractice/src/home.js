import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./home.css";
import axios from "axios";

export const StartButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: white;
`;
export const Homepage = () => {
  return (
    <>
      <div
        className="homepage"
        style={{
          backgroundColor: "black",
          width: "1485px",
          position: "relative",
          height: "710px",
          marginTop: "30px",
        }}
      >
        <div class="content">
          <div class="info">
            <h1
              style={{
                fontSize: "4.5em",
                fontFamily: "poppins",
                fontWeight: "bolder",
                marginLeft: "100px",
              }}
            >
              Become a Major <span style={{ color: "green" }}>Contributor</span>{" "}
              <br /> to App Excellence
            </h1>
            <p
              style={{
                marginLeft: "100px",
                fontSize: "25px",
                fontFamily: "outfit",
              }}
            >
              Useful reviews help developers create apps that will leave users
              enthralled.
            </p>
            <div class="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
