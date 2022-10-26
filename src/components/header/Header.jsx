import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import Facebook from "../../assets/images/icons/facebook.svg";
import Instagram from "../../assets/images/icons/instagram_icon.svg";
import Pinterest from "../../assets/images/icons/pinterest_icon.svg";
import "./Header.styles.css";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper ">
        <select>
          <option selected>USD</option>
        </select>
        <div className="logo_box">
          <img className="logo" src={Logo} alt="maynooth logo" />
        </div>

        <ul className="social-medias_list ">
          <li className="social-media_item ">
            <a
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani facebook"
            >
              <img src={Facebook} alt="facebook icon" />
            </a>
          </li>
          <li className="social-media_item ">
            <a
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani instagram"
            >
              <img src={Instagram} alt="Instagram icon" />
            </a>
          </li>
          <li className="social-media_item ">
            <a
              href="https://www.facebook.com/hazqeel.niz.2"
              alt="hizqel nizamani pinterest"
            >
              <img src={Pinterest} alt="pinterest icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
