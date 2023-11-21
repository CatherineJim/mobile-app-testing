import React from "react";
import "./role.css";
function Roles({ src, onClick }) {
  const handleIconClick = () => {
    alert("Icon clicked!");
  };
  return (
    <div className="role-info">
      <div className="role-content">
        <h1> Are you an app Tester or Developer?</h1>

        <p className="tester">
          <span className="span">Tester</span>
        </p>
        <p className="developer">
          <span className="span">Developer</span>
        </p>
        <div className="checkbox-img">
          <a href="/testerreg">
            <img
              className="checkboxes-icon"
              alt=""
              src="https://cdn.animaapp.com/projects/651ccb66e978363ad04f26d5/releases/651ccc135603f78c1bd972d5/img/mdi-checkboxes-marked-circle-outline-1@2x.png"
              onClick={handleIconClick}
              style={{ cursor: "pointer" }}
            />
          </a>
          <a href="/uploadtest">
            <img
              className="img"
              alt=""
              src="https://cdn.animaapp.com/projects/651ccb66e978363ad04f26d5/releases/651ccc135603f78c1bd972d5/img/mdi-checkboxes-marked-circle-outline-1@2x.png"
              onClick={handleIconClick}
              style={{ cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Roles;
