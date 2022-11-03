import companyLogoCut from "../images/android-chrome-192x192.png";
import companyLogoFull from "../images/text-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const socialNetworks = [
    { net: "facebook", site: "https://www.facebook.com" },
    { net: "instagram", site: "https://www.instagram.com" },
    { net: "whatsapp", site: "https://www.google.com" },
  ];
  const pages = [
    { name: "Sobre Nosotros", to: "/" },
    { name: "Precios", to: "/" },
    { name: "Ubicacion", to: "/" },
  ];

  function vitraLogoClick() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="navbar">
      <div className="left-side" onClick={() => vitraLogoClick()}>
        <ul className={showMenu ? "ul-visible" : "ul-non-visible"}>
          {pages.map((element) => (
            <li key={element.name}>
              <Link to={element.to} onClick={() => vitraLogoClick()}>
                {element.name}
              </Link>
            </li>
          ))}
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
        <SocialIcons networks={socialNetworks}></SocialIcons>
      </div>
    </nav>
  );
};

export default Navbar;
