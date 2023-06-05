import React from "react";
import "./Testimonials.scss";
import star from "../../assets/images/star.png";
import starfill from "../../assets/images/starfill.png";
import headshot from "../../assets/images/headshot.png";
import headshot1 from "../../assets/images/headshot1.png";
import headshot2 from "../../assets/images/headshot2.png";
import headshot3 from "../../assets/images/headshot3.png";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__image">
            <img src={headshot} alt="" />
          </div>
          <div className="testimonials__rblock">
            <div className="testimonials__stars">
              <img src={starfill} alt="" />
              <img src={starfill} alt="" />
              <img src={starfill} alt="" />
              <img src={starfill} alt="" />
              <img src={star} alt="" />
            </div>
            <h1>
              It was a pleasure to work with Daniele on the Housebiz project
              (Real Estate). We helped the Housebiz team to design the Web
            </h1>
            <div className="testimonials__founder">
              <p>
                JOHN MACKNEY<span>co- Founder of SISKO</span>
              </p>
            </div>
            <div className="testimonials__smallheadshots">
              <img src={headshot1} alt="" />
              <img src={headshot2} alt="" />
              <img src={headshot3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
