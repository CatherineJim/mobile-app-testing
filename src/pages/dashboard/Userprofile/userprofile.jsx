import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";

export const Userprofile = () => {
  return (
    <div className="index">
      <Sidebar />
      <div className="div">
        <div className="overlap-group">
          <p className="home">
            <span className="text-wrapper">Home</span>
          </p>
          <p className="my-tests">
            <span className="text-wrapper">My Tests</span>
          </p>
          <p className="community">
            <span className="text-wrapper">Community</span>
          </p>
          <p className="better-app">
            <span className="span">Better</span>
            <span className="text-wrapper-2">App</span>
          </p>
          <div className="overlap">
            <img
              className="ri-contacts-fill"
              alt="Ri contacts fill"
              src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/ri-contacts-fill-1@2x.png"
            />
          </div>
        </div>
        {/* <div className="frame">
          <div className="group">
            <p className="apps">
              <span className="text-wrapper-3">Apps</span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-3">Home</span>
            </p>
            <p className="reviews">
              <span className="text-wrapper-3">Reviews</span>
            </p>
            <p className="chat">
              <span className="text-wrapper-3">Chat</span>
            </p>
            <div className="frame-2">
              <img
                className="fluent"
                alt="Fluent"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/fluent-mdl2-education-1@2x.png"
              />
              <p className="education">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Education</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-3">
              <img
                className="streamline"
                alt="Streamline"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/streamline-entertainment-recording-tape-1-film-television-tv-mov-1@2x.png"
              />
              <p className="p">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Entertainment</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-4">
              <img
                className="fluent-communication"
                alt="Fluent communication"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/fluent-communication-16-regular-1@2x.png"
              />
              <p className="communication">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Communication</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-5">
              <img
                className="fluent-health"
                alt="Fluent health"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/fluent-mdl2-health-1@2x.png"
              />
              <p className="health-fitness">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Health & Fitness</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-6">
              <img
                className="ion-people-outline"
                alt="Ion people outline"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/ion-people-outline-1@2x.png"
              />
              <p className="social">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Social</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-7">
              <img
                className="streamline"
                alt="Streamline"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/streamline-entertainment-recording-tape-1-film-television-tv-mov-3@2x.png"
              />
              <p className="p">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Lifestyle</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <div className="frame-8">
              <img
                className="streamline"
                alt="Streamline"
                src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/streamline-entertainment-recording-tape-1-film-television-tv-mov-3@2x.png"
              />
              <p className="p">
                <span className="text-wrapper-4">
                  <ul>
                    <li>
                      <Link to="/#">Communication</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </div>
            <img
              className="iconamoon-settings"
              alt="Iconamoon settings"
              src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/iconamoon-settings-light-1@2x.png"
            />
          </div>
        </div> */}
        <div className="overlap-2">
          <div className="overlap-3">
            <p className="element">
              <span className="text-wrapper-5">20</span>
            </p>
            <p className="tests">
              <span className="text-wrapper-6">Tests</span>
            </p>
          </div>
          <div className="overlap-4">
            <p className="element-2">
              <span className="text-wrapper-5">20</span>
            </p>
            <p className="reviews-2">
              <span className="text-wrapper-6">Reviews</span>
            </p>
          </div>
          <div className="overlap-5">
            <img
              className="ellipse"
              alt="Ellipse"
              src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/ellipse-1-1@2x.png"
            />
            <img
              className="ph-star-fill"
              alt="Ph star fill"
              src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/ph-star-fill-1@2x.png"
            />
          </div>
          <p className="unstoppable-me">
            <span className="text-wrapper-7">Unstoppable. Me</span>
          </p>
          <img
            className="fe-edit"
            alt="Fe edit"
            src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/fe-edit-1@2x.png"
          />
        </div>
        <p className="my-badges">
          <span className="text-wrapper-8">My Badges</span>
        </p>
        <img
          className="mdi-badge"
          alt="Mdi badge"
          src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/mdi-badge-1@2x.png"
        />
        <img
          className="zondicons-badge"
          alt="Zondicons badge"
          src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/zondicons-badge-1@2x.png"
        />
        <img
          className="oi-badge"
          alt="Oi badge"
          src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/oi-badge-1@2x.png"
        />
        <img
          className="heroicons-solid"
          alt="Heroicons solid"
          src="https://cdn.animaapp.com/projects/651cc737cb6ed82b26fd0edc/releases/651cc807078b4bf0d795c1c4/img/heroicons-solid-badge-check-1@2x.png"
        />
        {/* <div className="overlap-6">
          <p className="devices">
            <span className="text-wrapper-9">Devices</span>
          </p>
          <p className="samsung-galaxy">
            <span className="text-wrapper-10">Samsung Galaxy</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Userprofile;
