import React from "react";
import "./dashnavigation.css";

export const DashNav = () => {
  return (
    <>
      <div className="search-your-wrapper">
        <p className="search-your">
          <span className="text-wrapper-2">Search your dashboard</span>
        </p>
      </div>
      <img
        className="carbon-search"
        alt="Carbon search"
        src="https://cdn.animaapp.com/projects/651ccb66e978363ad04f26d5/releases/651ed9c3d148241fab28761b/img/carbon-search-1@2x.png"
      />
    </>
  );
};
export default DashNav;
