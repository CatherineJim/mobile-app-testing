import "./uploadtest.css";
import Sidebar from "../dashboard/Sidebar/sidebar";
import React, { useState } from "react";
// import { ReactDOM } from "react";
import { Navbar } from "../../navbar/navbar";

function Createtest() {
  const [isRegistered, setIsRegistered] = useState(false);
  const handleRegistration = () => {
    console.log("Registered successfully!");
    setIsRegistered(true);
  };
  setTimeout(() => {
    setIsRegistered(false);
  }, 2000);

  return (
    <div className="wrapper">
      <Sidebar />
      <Navbar />
      <div className="title">New test</div>
      <form action="#" />
      <div className="user-details">
        <p class="profile-img">
          <input
            name="profileimage"
            type="image"
            alt="profile image of user"
            src="https://th.bing.com/th/id/OIP.Ta3GX6-k2iyMQt00doRnBQHaHa?pid=ImgDet&rs=1"
            class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
            id="name"
          />
        </p>
        <div className="input-box">
          <span class="details">App title </span>
          <input type="text" placeholder="Enter your name of app" required />
        </div>
        <div className="input-box">
          <span class="details">App descrition</span>
          <textarea
            style={{
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "640px",
              color: "gray",
              paddingLeft: "15px",
              fontSize: "16px",
              borderBottomWidth: "2px",
            }}
            rows="4"
            cols="50"
            placeholder="Write your reviews here..."
            value="Description"
          />
        </div>
        <div className="input-box">
          <span class="details">E-Mail</span>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <span class="details">Phone Number</span>
          <input type="number" placeholder="Enter your number" required />
        </div>
        <div className="input-box">
          <span class="details">Password</span>
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <div className="input-box">
          <span class="details">Confirm Password</span>
          <input type="password" placeholder="Confirm your Password" required />
        </div>
      </div>

      {isRegistered ? (
        <div>
          <p>Registered successfully!</p>
          {/* You can also add a button to reset the registration state if needed */}
        </div>
      ) : (
        <div>
          {/* Registration form inputs go here */}
          <button onClick={handleRegistration}>Register</button>
        </div>
      )}
    </div>
  );
}
export default Createtest;
