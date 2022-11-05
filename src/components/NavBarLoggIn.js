import "./NavBarLoggIn.css";

import MainLogo from "./shared-components/MainLogo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <MainLogo />
      <div className="navBar-items">
        <div className="navBar-item underline">
          <a href="/login">Home</a>
        </div>
        <div className="navBar-item underline">
          <a href="/community">Community</a>
        </div>
        <div className="navBar-item underline">
          <a href="/dashboard">Patient Info</a>
        </div>
        <div className="navBar-item underline">
          <a href="/blogs">Blogs</a>
        </div>
        <div className="navBar-item underline">
          <a href="/aboutUs">About Us</a>
        </div>
        <div className="navBar-item underline">
          <a href="/contact">Contact</a>
        </div>
        <div className="navBar-item profile">
          <span className="profile-image">
            <img
              src={require("../components/images/doctor-imageProfile.jpg")}
              alt=""
            />
          </span>{" "}
          <p className="profile-name">
            <a href="http://localhost:4000/doctor-dashboard">Dr. Sakar Regmi</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
