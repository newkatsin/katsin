import React from "react";
import "./header.scss";
import HamburgerButton from "../hamburgerButton";
import Button from "../button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/katsin-logo-white.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/call.png";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const Header = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();
  const loc = useLocation();
  const handleClick = () => {
    window.open(
      "https://restaurant.opentable.com/v2/",
      "_blank", // <- This is what makes it open in a new window.
    );
  };

  const handleLogoClick = () => {
    navigate("/");
    setShowSideBar(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header tabIndex="0" className="header">
      <HamburgerButton
        isActive={showSideBar}
        onClick={() => setShowSideBar(!showSideBar)}
      />
      <a
        href="https://www.google.com/maps/place/515+W+Broadway,+Glendale,+CA+91204/@34.1469975,-118.2658522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c059cd1794bf:0xa2e2eb7f04a67441!8m2!3d34.1469975!4d-118.2658522!16s%2Fg%2F11csksbsjl?entry=ttu"
        target="_blank"
        rel="noreferrer"
        className="location-link"
      >
        <img src={location} alt="img" />
        <span>515 W Broadway, Unit 111, Glendale, CA 91204</span>
      </a>
      <div className="logo" onClick={() => handleLogoClick()}>
        <LazyLoadImage
          src={logo}
          alt="img"
          width={"auto"}
          height={"100%"}
          effect="opacity"
        />
      </div>
      <a href="tel:+18188693030" className="phone-link">
        <img src={phone} alt="img" />
        <span>+1 (818)-869-3030</span>
      </a>
      <Button
        onClick={handleClick}
        className={` ${loc.pathname.includes("events") ? "inevents" : ""}`}
      >
        Book Now
      </Button>
    </header>
  );
};

export default Header;
