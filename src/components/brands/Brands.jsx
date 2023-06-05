import React from "react";
import "./Brands.scss";
import Facebook from "../../assets/images/Facebook.png";
import tinder from "../../assets/images/tinder.png";
import Microsoft from "../../assets/images/Microsoft.png";
import Airbnb from "../../assets/images/Airbnb.png";
import Hubspot from "../../assets/images/Hubspot.png";

export default function Brands() {
  return (
    <>
      <div className="brands">
        <img src={Facebook} alt="" />
        <img src={tinder} alt="" />
        <img src={Microsoft} alt="" />
        <img src={Airbnb} alt="" />
        <img src={Hubspot} alt="" />
      </div>
    </>
  );
}
