import React from "react";
import "./Footer1.scss";

export default function Footer1() {
  return (
    <>
      <div className="footer1">
        <div className="footer1__container">
          <div className="footer1__leftlinks">
            <div className="footer1__leftlink">
              <h1>Shop</h1>
              <ul>
                <li>Specialty</li>
                <li>Offers</li>
                <li>Updates</li>
                <li>Best Sellers</li>
              </ul>
            </div>
            <div className="footer1__leftlink">
              <h1>About Us</h1>

              <ul>
                <li>Who are we</li>
                <li>Our Achievement</li>
                <li>Our Services</li>
                <li>Best Testimonials</li>
              </ul>
            </div>
          </div>

          <h2>
            MEAT<span>FIT</span>
          </h2>
          <h3>A trusted Meat Shop</h3>

          <input placeholder="Enter your Email Address" />

          <button>Subscripe</button>

          <div className="footer1__rightlinks">
            <div className="footer1__rightlink">
              <h1>Contact Us</h1>
              <ul>
                <li>HelloMeat@amp.com</li>
                <li>Opening Hour</li>
                <li>Location</li>
                <li>09756567 88</li>
              </ul>
            </div>

            <div className="footer1__rightlink">
              <h1>Social Links</h1>
              <ul>
                <li>Facebook Page</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>Instragram</li>
              </ul>
            </div>
          </div>

          <p>Copyright 2023 All right reserved by Meatfit</p>
        </div>
      </div>
    </>
  );
}
