import React from "react";
import "./Button.scss";
import Arrow from "../../assets/images/Arrow.png";

export default function Button() {
  return (
    <>
      <div className="btn">
        <span>See our Collection</span>
        <img src={Arrow} alt="" />
      </div>
    </>
  );
}
