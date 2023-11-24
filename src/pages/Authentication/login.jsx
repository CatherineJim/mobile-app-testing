// import { Navbar } from "../../navbar/navbar";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  facebookProvider,
  googleProvider,
  twitterProvider,
} from "../../firebase-config";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [userDetails, setUserDetails] = useState();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/user/signin",
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
        setUserDetails(response.data.data.user);
        navigate("/role", { state: { user: response.data.data.user } });
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

  const handleSignUpWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);

      if (response) {
        console.log(response);

        // setUser(response.user.providerData);

        localStorage.setItem(
          "user",
          JSON.stringify(response.user.providerData)
        );

        // router.push("/chat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div class="wrapper">
        <div class="heading">
          <h2>Welcome!</h2>
          <p>Log in to your account</p>
        </div>

        <div class="input-group">
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            required={true}
            id="email"
            class="input-field"
            placeholder="Enter your email"
            style={{ borderRadius: "0px" }}
          />
        </div>

        <div class="input-group">
          <input
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            type="password"
            id="password"
            class="input-field"
            placeholder="Password"
          />
        </div>

        <div class="input-group row">
          <div class="row">
            <input type="checkbox" id="remember" hidden />
            {/* <label for="remember" class="custom-checkbox"></label>
            <label for="remember">Remember me?</label> */}
          </div>

          <div className="row">
            <div className="col">
              <a href="#" target="_blank">
                Forgot password?
              </a>
              <p>
                Don't have an account?
                <Link to="/signup" target="_blank">
                  Sign in
                </Link>
              </p>
            </div>
            <div className="col flex gap-4">
              <p className="text-center">Sign in with</p>
              <div className="d-flex justify-content-center ">
                <FaFacebook
                  role="button"
                  onClick={() => {
                    alert("clicked");
                  }}
                  className="fs-2 me-3 text-primary"
                />
                <FaTwitter
                  role="button"
                  className="fs-2 me-3 text-primary opacity-50"
                />
                <FcGoogle
                  role="button"
                  onClick={handleSignUpWithGoogle}
                  className="fs-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="input-group">
          <button
            type="submit"
            style={{ width: "630px" }}
            onClick={handleLogin}
          >
            {loading ? "loading..." : "Login"}{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
