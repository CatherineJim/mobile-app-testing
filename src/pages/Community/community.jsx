import React from "react";
import { Navbar } from "../../navbar/navbar";
import "./community.css";

export const Community = () => {
  return (
    <>
      <Navbar />
      <div className="blog-page">
        <div className="blog-info">
          <h1>Newsroom</h1>
          <img src="https://picsum.photos/id/1011/800/450" alt="" />
          <h2>Sylvester</h2>
          <h3>Web developer</h3>
          <p>Reviews on Go App. It's a fun app. You all will love it</p>
          <div class="inputBox">
            <input type="email" required="required" />
          </div>
          <i></i>
        </div>
        <div className="blog-info">
          {/* <h1>Newsroom</h1> */}
          <img src="https://picsum.photos/id/1011/800/450" alt="" />
          <h2>Sylvester</h2>
          <h3>Web developer</h3>
          <p>Reviews on Go App. It's a fun app. You all will love it</p>
          <div class="inputBox">
            <input type="email" required="required" />
          </div>
          <i></i>
        </div>
        <div className="blog-info">
          {/* <h1>Newsroom</h1> */}
          <img src="https://picsum.photos/id/1011/800/450" alt="" />
          <h2>Sylvester</h2>
          <h3>Web developer</h3>
          <p>Reviews on Go App. It's a fun app. You all will love it</p>
          <div class="inputBox">
            <input type="email" required="required" />
          </div>
          <i></i>
        </div>
      </div>
    </>
  );
};
