import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import carret from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languge</li>
        </ul>
      </div>
      <div className="Navbar-right">
        <img src={search} alt="Search" className="icons" />
        <p>Children</p>
        <img src={bell} alt="Search" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="Search" className="profile" />
          <img src={carret} alt="Search" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
