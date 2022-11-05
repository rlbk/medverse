import "./NavBar.css";
import Button from "./shared-components/Button";
import MainLogo from "./shared-components/MainLogo";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <MainLogo />
      <div>
        <Button text="Login" addClass="btn-shade" />
        <Button text="Get Started for Free" />
      </div>
    </div>
  );
};

export default NavBar;
