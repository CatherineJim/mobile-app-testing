import { Navbar } from "../../navbar/navbar";
import React from "react";
import "./home.module.css";
import { useState } from "react";
export const Homepage = () => {
  const [placeholder, setPlaceholder] = useState("Search...");
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSearch = () => {
    // if (isLoggedIn) {
    //   setPlaceholder("Search for products");
    // } else {
    //   setPlaceholder("Search...");
    // }
  };
  return (
    <div className="home-content">
      <Navbar />
      <h1
        style={{
          color: "black",
          textAlign: "center",
          marginTop: "120px",
          fontWeight: "bolder",
          fontFamily: "poppins",
        }}
      >
        Welcome to Beta App,
        <br />
        get hands on <span style={{ color: "#C8367C" }}>Experience</span> and
        leave Reviews
        <br />
        after Testing out new apps
      </h1>
      <button
        className="search-button"
        onClick={handleSearch}
        style={{
          width: "1200px",
          height: "50px",
          backgroundColor: "white",
          color: "black",
          marginTop: "70px",
          borderRadius: "60px",
          marginLeft: "150px",
        }}
      >
        <i className="fas fa-search"></i> {placeholder}
      </button>
      {/* <label>
        <input type="checkbox" onChange={() => setIsLoggedIn(!isLoggedIn)} />
        Logged In
      </label> */}

      <div class="app-categories">
        <h2
          style={{
            fontSize: "20px",
            backgroundColor: "gray",
            color: "white",
            height: "40px",
            paddingTop: "10px",
            width: "190px",
            marginLeft: "180px",
            marginTop: "50px",
            borderRadius: "50px",
            textAlign: "center",
          }}
        >
          Entertainment
        </h2>
        <h2
          style={{
            fontSize: "20px",
            backgroundColor: "gray",
            color: "white",
            height: "40px",
            paddingTop: "10px",
            width: "190px",
            marginLeft: "390px",
            marginTop: "-47px",
            borderRadius: "50px",
            textAlign: "center",
          }}
        >
          Educational
        </h2>
        <h2
          style={{
            fontSize: "20px",
            backgroundColor: "gray",
            color: "white",
            height: "40px",
            paddingTop: "10px",
            width: "190px",
            marginLeft: "600px",
            marginTop: "-47px",
            borderRadius: "50px",
            textAlign: "center",
          }}
        >
          Educational
        </h2>
        <h2
          style={{
            fontSize: "20px",
            backgroundColor: "gray",
            color: "white",
            height: "40px",
            paddingTop: "10px",
            width: "190px",
            marginLeft: "810px",
            marginTop: "-47px",
            borderRadius: "50px",
            textAlign: "center",
          }}
        >
          Educational
        </h2>
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
            <h2 class="card-title">Mail-Me App</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
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
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
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
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1682310549053-2b5e04e78344?auto=format&fit=crop&q=80&w=912&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://www.designer-daily.com/wp-content/uploads/2013/07/19-app.jpg"
              alt="Card Image"
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1683141081466-29239d3b4838?auto=format&fit=crop&q=80&w=1777&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Card Image"
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://i.pinimg.com/564x/4b/4b/f6/4b4bf68ce92ea64c87cb8e0de09ccbed.jpg"
              alt="Card Image"
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://i.pinimg.com/564x/8b/3e/d2/8b3ed2f6d578976a287c89d6294bbf5f.jpg"
              alt=""
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://i.pinimg.com/originals/37/b7/7f/37b77f318d06520ef0dfa935caea6f47.jpg"
              alt=""
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img
              src="https://i.pinimg.com/564x/b3/8a/2c/b38a2cf4b5685dc17d17147356e652b4.jpg"
              alt=""
            />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/280680" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/203241" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/203241" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/203241" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/203241" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src="https://openclipart.org/image/800px/203241" alt="" />
          </div>

          <div class="card-content">
            <h2 class="card-title">Card Title</h2>

            <p class="card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              tellus euismod, dapibus neque vitae, elementum magna.
            </p>

            <a href="#" class="card-button" style={{ color: "white" }}>
              Start test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
