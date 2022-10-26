import React from 'react'
import CartIcon from "../../assets/images/icons/cart-icon.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
    <div className="wrapper ">
      <div className="search_box">
        <input
          type="search"
          placeholder="find something you love"
          className="serach-input"
        />
        <span className="zoom_icon"></span>
      </div>
      <ul className="flex items-center navigation-items ">
        <li className="navigation-item">
          <a href="#">Bedroom</a>
        </li>
        <li className="navigation-item">
          <a href="#">living room</a>
        </li>
        <li className="navigation-item">
          <a href="#">kitchen & dinning</a>
        </li>
        <li className="navigation-item">
          <a href="#">Sign in / sign up</a>
        </li>
        <li className="navigation-item">
          <img src={CartIcon} />
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navigation