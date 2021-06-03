import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="d-lg-none d-block sticky">
      <div className="nav-bar">
        <a href="#" className="menu-bars mr-3">
          <FaIcons.FaBars onClick={showSidebar} />
        </a>
        <div className="d-flex align-items-center ml-auto">
          <FontAwesomeIcon
            className="primary-color mr-1"
            style={{ fontSize: "1rem" }}
            icon={faTelegramPlane}
          />
          <small className="primary-color mr-3 bold">
            support@aleshamart.com
          </small>

          <FontAwesomeIcon
            className="mr-2 primary-color"
            icon={faPhoneAlt}
          ></FontAwesomeIcon>
          <small className="mr-3 primary-color">16731</small>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <a href="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </a>
          </li>
          <div className="top-nav">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </div>
            <div className="d-flex justify-content-center">
              <a className="text-white bold mr-3" href="#">
                Sign Up
              </a>
              <a className="text-white bold ml-3" href="#">
                Login
              </a>
            </div>
          </div>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.path}>
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
