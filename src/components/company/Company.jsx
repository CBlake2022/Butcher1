import React from "react";
import "./Company.scss";

export default function Company() {
  return (
    <>
      <div className="company">
        <div className="company__container">
          <div className="company__detail">
            <h1> Meat Delivery Company Since 1997</h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy.Simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
          <div className="company__video">
            <iframe
              src="https://www.youtube.com/embed/1PnVor36_40"
              frameborder="0"
              allowfullscreen
              className="company__embed"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
