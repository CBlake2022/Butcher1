import React from "react";
import "./Hero.scss";
import Button from "../button/Button";
import Reviews from "../reviews/Reviews";
import heroImage from "../../assets/images/hero-image.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__details">
          <p className="hero__sub">Fresh meat since 1997</p>
          <h1>Get fresh meat in your doorstep</h1>
          <p className="hero__descr">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>
          <Button />
          <Reviews />
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
}
