import React from "react";
import "./Reviews.scss";
import star from "../../assets/images/star.png";
import starfill from "../../assets/images/starfill.png";
import capterra from "../../assets/images/capterra.png";
import food from "../../assets/images/food.png";

export default function Reviews() {
  return (
    <>
      <div className="reviews">
        <div className="reviews__customer">
          <div className="reviews__stars">
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={star} alt="" />
          </div>
          <p>4.9/5 - from 213 reviews</p>
          <img className="reviews__logo" src={capterra} alt="" />
        </div>

        <div className="reviews__customer">
          <div className="reviews__stars">
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={starfill} alt="" />
            <img src={star} alt="" />
          </div>
          <p>4.9/5 - from 213 reviews</p>
          <img className="reviews__logo" src={food} alt="" />
        </div>
      </div>
    </>
  );
}
