import React from "react";
import "./appdetails.css";
import { Link } from "react-router-dom";

export const Appdetails = () => {
  return (
    <div className="app-content">
      <div className="appcontent-wrapper">
        <div className="overlap">
          <div className="app-info">
            <p className="lifestyle">
              <span className="text-wrapper">Lifestyle</span>
            </p>
            <p className="app-details">
              <span className="span">App details</span>
            </p>
            <p className="h">
              <span className="text-wrapper-2">H-Life App</span>
            </p>
            <div className="frame">
              <p className="android">
                <span className="text-wrapper-3">Android</span>
              </p>
              <p className="IOS">
                <span className="text-wrapper-3">IOS</span>
              </p>
              <p className="playable-devices">
                <span className="span">Playable Devices</span>
              </p>
              <p className="description">
                <span className="text-wrapper-4">Description</span>
              </p>
              <p className="lorem-ipsum-dolor">
                <span className="text-wrapper-5">
                  Lorem ipsum dolor sit amet consectetur. In in sapien ultricies
                  massa. Id tincidunt id lectus condimentum eget cras sed.
                  Rhoncus nisl lobortis congue morbi scelerisque lectus. Auctor
                  erat porta venenatis urna quis. Etiam viverra interdum proin
                  enim orci quisque faucibus convallis.
                </span>
              </p>
            </div>
            <div className="developer-info-wrapper">
              <div className="developer-info">
                <div className="group">
                  <div className="overlap-group">
                    <p className="send-a-direct">
                      <Link
                        to="/chatroom"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        send a direct message
                      </Link>
                    </p>
                  </div>
                </div>
                <p className="developed-by">
                  <span className="text-wrapper-7">Developed by:</span>
                </p>
                <p className="john-newman">
                  <span className="text-wrapper-8">John Newman</span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-5">
                    Lorem ipsum dolor sit amet consectetur. In in sapien
                    ultricies massa. Id tincidunt id lectus condimentum eget
                    cras sed.
                  </span>
                </p>
                <p className="see-more">
                  <Link to="">see more</Link>
                </p>
              </div>
            </div>
            <div className="get-started-button">
              <div className="get-started-wrapper">
                <p className="get-started">
                  <Link
                    to="/testpage"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Start test
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="app-image-wrapper">
            <div className="app-image">
              <div className="div">
                <div className="mdi-diary">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <img
                        className="natural-food"
                        alt="Natural food"
                        src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/6522e39e1ae1f2fd65a4bac7/img/natural-food-1@2x.png"
                      />
                      <img
                        className="img"
                        alt="Natural food"
                        src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/6522e39e1ae1f2fd65a4bac7/img/natural-food-2@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <p className="h-life-app">
                  <span className="text-wrapper-11">H-Life App</span>
                </p>
              </div>
            </div>
          </div>
          <img
            className="mingcute-close-fill"
            alt="Mingcute close fill"
            src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/6522e39e1ae1f2fd65a4bac7/img/mingcute-close-fill-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Appdetails;
