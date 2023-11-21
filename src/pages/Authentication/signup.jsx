// import { Navbar } from "../../navbar/navbar";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
export const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/user/signup",
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
        alert(response.data.data.user.email);
        console.log("====================================");
        navigate("/login", { state: { user: response.data.data.user } });
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
  return (
    <>
      {/* <Navbar /> */}
      <div class="wrapper">
        <div class="heading">
          <h2>Hey there!</h2>
          <p>Sign In to your account</p>
        </div>

        <div class="input-group">
          <input
            type="text"
            id="username"
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
            }}
            class="input-field"
            placeholder="Username"
            style={{ borderRadius: "5px", width: "310px" }}
          />
        </div>

        <div class="input-group">
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            id="email"
            class="input-field"
            placeholder="Email Address"
            style={{ borderRadius: "5px", width: "310px" }}
          />
        </div>
        <div class="input-group">
          <input
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
            }}
            type="tel"
            id="phone"
            class="input-field"
            placeholder="Phone Number"
            style={{ borderRadius: "5px", width: "310px" }}
          />
        </div>

        <div class="input-group">
          <input
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            type="text"
            id="password"
            class="input-field"
            placeholder="Password"
            style={{ borderRadius: "5px", width: "310px" }}
          />
        </div>
        <div class="input-group">
          <input
            value={form.confirmPassword}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
            }}
            type="text"
            id="confirm password"
            class="input-field"
            placeholder="Confirm Password"
            style={{ borderRadius: "5px", width: "310px" }}
          />
        </div>

        <div class="input-group row">
          <div class="row">
            {/* <input type="checkbox" id="remember" hidden />
            <label
              for="remember"
              class="custom-checkbox"
              style={{ width: "4px", marginLeft: "10px" }}
            ></label> */}
            <label for="remember">
              Already have an account?
              <a href="./login" target="blank" style={{ color: "highlight" }}>
                login
              </a>
            </label>
          </div>

          <div class="row">
            <a href="#" target="_blank">
              Forgot password?
            </a>
          </div>
        </div>

        <div class="input-group">
          <button onClick={handleSignup}>
            {loading ? "loading..." : "Sign In"}{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
