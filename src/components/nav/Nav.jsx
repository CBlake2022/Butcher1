import React from "react";
import "./Nav.scss";
import hamburger from "../../assets/images/hamburger.svg";
import user from "../../assets/icons/user.png";
import heart from "../../assets/icons/heart.png";
import shoppingBag from "../../assets/icons/shopping-bag.png";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__container">
        <input type="checkbox" class="nav__toggle" id="hamburger" hidden />
        <div className="nav__lblock">
          <div className="nav__hamburger">
            <label for="hamburger">
              <img src={hamburger} alt="hamburger" width={23} />
            </label>
          </div>
          <h1>
            MEAT<span>FIT</span>
          </h1>
        </div>
        <ul className="nav__links">
          <li>Beef</li>
          <li>Meat</li>
          <li>Chicken</li>
          <li>Sea Food</li>
          <li>Poultry</li>
        </ul>
        <div className="nav__icons">
          <img src={user} alt="" />
          <img src={heart} alt="" />
          <img src={shoppingBag} alt="" />
        </div>
      </div>
    </div>
  );
}
