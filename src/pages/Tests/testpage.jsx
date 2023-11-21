// import { Link } from "@mui/material";
import { Button } from "bootstrap";
import React from "react";
// import "./style.css";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReviewPage from "../../Components/Reviews/reviews";

export const Testing = () => {
  return (
    <div className="test-index" style={{ height: "1200px", width: "50em" }}>
      <div style={{ width: "0px" }}>
        <iframe
          style={{ alignItems: "center", marginLeft: "50px" }}
          title="x"
          src="https://appetize.io/embed/etnss4jgzym5ohpdo2c5q5jmye?device=pixel4&osVersion=11.0&scale=75"
          width="378px"
          height="800px"
          frameborder="0"
          scrolling="no"
        ></iframe>
        {/* <div className="device-list" style={{ padding: "30px" }}>
          <button style={{ width: "120px" }}>Android devices</button>
        </div> */}
      </div>
      <div className="app-link">
        {/* <button
          href="https://appetize.io/upload"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            borderRadius: "20px",
            width: "300px",
            marginTop: "650px",
            marginRight: "100px",
            textDecoration: "none",
          }}
        >
          Click here to upload app{" "}
        </button> */}
        <ReviewPage />
      </div>
    </div>
  );
};

function handleSubmit(files) {
  // Handle the comment submission and file uploads here
  console.log("Comment submitted with files:", files);
}
