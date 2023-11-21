import { NavLink, Navbar } from "../navbar/navbar";
import styled from "styled-components";
import { useState } from "react";
import { LoginButton } from "../navbar/navbar";

export const StartButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: white;
`;
export const Home = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <>
      <Navbar />

      <div
        className="home-container"
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
              Explore, Play, <span style={{ color: "green" }}>Review</span>{" "}
            </h1>

            {/* <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
              style={{ height: "350px", marginLeft: "1000px" }}
            /> */}

            <p
              style={{
                marginLeft: "100px",
                fontSize: "22px",
                fontFamily: "outfit",
              }}
            >
              Forget the old app testing routines, embrace the wild andthrilling
              world of app reviews and discussions.
              <br />
              Useful reviews help developers create apps that will leave users
              enthralled.
            </p>
            <StartButton
              style={{
                backgroundColor: "#C8367C",
                marginLeft: "100px",
                borderRadius: "50px",
                marginTop: "60px",
              }}
            >
              <NavLink
                to="/role"
                style={{
                  color: "white",
                  fontFamily: "poppins, helvetica",
                  fontWeight: "bold",
                }}
              >
                Get started
              </NavLink>
            </StartButton>
          </div>
        </div>
      </div>
      <div
        className="features-container"
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
            <h2
              style={{
                color: "white",
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              Features of this App
            </h2>

            <p
              style={{
                marginLeft: "100px",
                fontSize: "25px",
                color: "white",
                fontFamily: "outfit",
                textAlign: "center",
              }}
            >
              Useful reviews help developers create apps that will leave users
              enthralled.
            </p>
          </div>

          <div class="card-row" style={{ marginLeft: "30px" }}>
            <div class="card">
              <div class="card-image">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682309667112-971fb0622b55?auto=format&fit=crop&q=80&w=912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Card Image"
                />
              </div>

              <div class="card-content">
                <h2 class="card-title">Engaged Users</h2>

                <p class="card-description">Growing daily</p>

                {/* <a href="#" class="card-button" style={{ color: "white" }}>
                  Start test
                </a> */}
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682309795157-4b11622bc9e9?auto=format&fit=crop&q=80&w=912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Card Image"
                />
              </div>

              <div class="card-content">
                <h2 class="card-title">Reviews posted</h2>

                <p class="card-description">Over 2 million</p>

                {/* <a href="#" class="card-button" style={{ color: "white" }}>
                  Start test
                </a> */}
              </div>
            </div>

            <div class="card">
              <div class="card-image">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681487872232-fa622a6dd59e?auto=format&fit=crop&q=80&w=1780&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Card Image"
                />
              </div>

              <div class="card-content">
                <h2 class="card-title">Apps tested</h2>

                <p class="card-description">More than 500</p>

                {/* <a href="#" class="card-button" style={{ color: "white" }}>
                  Start test
                </a> */}
              </div>
            </div>
          </div>

          <div
            className="usp-section"
            style={{
              backgroundColor: "white",
              width: "1485px",
              position: "relative",
              height: "710px",
              // marginTop: "30px",
            }}
          >
            <h2
              style={{
                color: "black",
                fontSize: "40px",
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              Features of this App
            </h2>

            <p
              style={{
                marginLeft: "100px",
                fontSize: "25px",
                color: "black",
                fontFamily: "outfit",
                textAlign: "center",
              }}
            >
              Useful reviews help developers create apps that will leave users
              enthralled.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
