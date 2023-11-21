import React from "react";
import "./cards.css";
// import Dashboard from "../pages/dashboard/dashboard";

// function Card({ appName, numberOfReviews }) {
export const Card = ({ appName, numberOfReviews }) => {
  return (
    <>
      <div className="app-card">
        <img src="bgimg.jpg" alt="" />
        <h2>{appName}</h2>
        <p>Number of Reviews: {numberOfReviews}</p>
        <div className="cardbtn">Test</div>
        {/* <Card appName="App 1" numberOfReviews={50} />
        <Card appName="App 2" numberOfReviews={30} />
        <Card appName="App 3" numberOfReviews={70} /> */}
      </div>

      <div className="app-card">
        {/* <img
          src="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
          alt=""
        /> */}
        <h2>{appName}</h2>
        <p>Number of Reviews: {numberOfReviews}</p>
        <div className="cardbtn">Test</div>
        {/* <Card appName="App 1" numberOfReviews={50} />
        <Card appName="App 2" numberOfReviews={30} />
        <Card appName="App 3" numberOfReviews={70} /> */}
      </div>

      <div className="app-card">
        <img src="bgimg.jpg" alt="" />
        <h2>{appName}</h2>
        <p>Number of Reviews: {numberOfReviews}</p>
        <div className="cardbtn">Test</div>
        {/* <Card appName="App 1" numberOfReviews={50} />
        <Card appName="App 2" numberOfReviews={30} />
        <Card appName="App 3" numberOfReviews={70} /> */}
      </div>
    </>
  );
};

export default Card;
