import "./testerreg.css";
import DevSidebar from "../Developer/Developer Dashboard/Pages/Dev-Sidebar/dev-sidebar";
import React, { useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactDOM } from "react";

function TesterRegistration() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    location: "",
    age: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = () => {
    console.log("Registered successfully!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
    setIsRegistered(true);
  };
  setTimeout(() => {
    setIsRegistered(false);
  }, 2000);

  const [userDetails, setUserDetails] = useState();

  const [loading, setLoading] = useState(false);

  const handleTesterReg = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/user/testerreg",
        form,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response) {
        setLoading(false);
        console.log("====================================");
        console.log(response.data.data, "response");
        alert(response.data.data.user.username);
        setUserDetails(response.data.data.user);
        navigate("/home", { state: { user: response.data.data.user } });
        console.log("====================================");
      }
    } catch (error) {
      setLoading(false);
      console.log("====================================");
      console.log(error, "error");
      console.log("====================================");
    } finally {
      setLoading(false);
    }
  };

  // // Get a reference to the input element
  // const phoneNumberInput = document.getElementById("phoneNumberInput");

  // // Add an event listener for the "keydown" event
  // phoneNumberInput.addEventListener("keydown", function (event) {
  //   if (event.keyCode === 13) {
  //     validateNigerianPhoneNumber();
  //   }
  // });

  // function validateNigerianPhoneNumber() {
  //   const validationMessage = document.getElementById("validationMessage");
  //   const phoneNumber = phoneNumberInput.value;

  //   // Regular expression pattern for a Nigerian phone number with the country code +234
  //   const pattern = "/^+234[789]d{9}$/";

  //   if (pattern.test(phoneNumber)) {
  //     validationMessage.textContent = "Valid Nigerian phone number.";
  //   } else {
  //     validationMessage.textContent =
  //       "Invalid Nigerian phone number. Please use the format +234xxxxxxxxxx (13 digits).";
  //   }
  // }

  return (
    <div class="wrapper">
      <DevSidebar />
      <Navbar />
      <div class="title">Tester Registration</div>
      <form action="#" />
      <div class="user-details">
        <div class="input-box">
          <span class="details">Full Name</span>
          <input
            value={form.fullname}
            onChange={(e) => {
              setForm({ ...form, fullname: e.target.value });
            }}
            type="text"
            id="fullname"
            placeholder="Enter your fullname"
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">Username</span>
          <input
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
            }}
            type="text"
            id="username"
            placeholder="Enter your username"
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">E-Mail</span>
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            id="email"
            placeholder="Enter your email"
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">Phone Number</span>
          <input
            value={form.phone}
            type="tel"
            pattern="[0-9]*"
            placeholder="Enter your Nigerian phone number (e.g., +2348012345678)-digits number"
            maxLength="14"
            id="phoneNumberInput"
            // onKeyDown="handleKeyPress(event)"
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            required={true}
          />
          <p id="validationMessage"></p>
        </div>
        <div class="input-box">
          <span class="details">Password</span>
          <input
            value={form.password}
            type="password"
            placeholder="Enter your Password"
            id="password"
            // onKeyDown="handleKeyPress(event)"
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">Confirm Password</span>
          <input
            value={form.confirmpassword}
            type="password"
            placeholder="Confirm your Password"
            id="confirm password"
            // onKeyDown="handleKeyPress(event)"
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
            }}
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">Age</span>
          <input
            value={form.age}
            type="number"
            placeholder="Enter your age"
            id="age"
            // onKeyDown="handleKeyPress(event)"
            onChange={(e) => {
              setForm({ ...form, age: e.target.value });
            }}
            required={true}
          />
        </div>
        <div class="input-box">
          <span class="details">Location</span>
          <input
            value={form.location}
            type="text"
            placeholder="Choose your location"
            id="location"
            // onKeyDown="handleKeyPress(event)"
            onChange={(e) => {
              setForm({ ...form, location: e.target.value });
            }}
            required={true}
          />
        </div>
      </div>
      <div class="gender-details">
        <input type="radio" name="gender" id="dot-1" />
        <input type="radio" name="gender" id="dot-2" />
        <input type="radio" name="gender" id="dot-3" />
        <span class="gender-title">Gender</span>
        <div class="category">
          <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer Not to say</span>
          </label>
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
          <button
            type="submit"
            style={{ width: "630px" }}
            onClick={handleTesterReg}
          >
            {loading ? "loading..." : "Register"}{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}
export default TesterRegistration;
