import companyLogoCut from "../images/android-chrome-192x192.png";
import companyLogoFull from "../images/text-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  function vitraLogoClick() {
    console.log("MENU");
    setShowMenu(!showMenu);
  }
  return (
    <nav className="navbar">
      <div className="left-side" onClick={() => vitraLogoClick()}>
        <ul className={showMenu ? "ul-visible" : "ul-non-visible"}>
          <li>
            <Link to={"/"} onClick={() => vitraLogoClick()}>
              Coffee
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => vitraLogoClick()}>
              Coffee
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => vitraLogoClick()}>
              Coffee
            </Link>
          </li>
          <li>
            <Link to={"/"} onClick={() => vitraLogoClick()}>
              Coffee
            </Link>
          </li>
        </ul>
        <div
          className={
            showMenu ? `logo-image-container rotate` : "logo-image-container"
          }
        >
          <img className="logo-img" src={companyLogoCut} alt="" />
        </div>
        <div className="logo-text-container">
          <img className="logo-text" src={companyLogoFull} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="logo-image-container">
          <img className="logo-img" src={companyLogoCut} alt="" />
        </div>
        <div className="logo-image-container">
          <img className="logo-img" src={companyLogoCut} alt="" />
        </div>
        <div className="logo-image-container">
          <img className="logo-img" src={companyLogoCut} alt="" />
        </div>
        <div className="logo-image-container">
          <img className="logo-img" src={companyLogoCut} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
