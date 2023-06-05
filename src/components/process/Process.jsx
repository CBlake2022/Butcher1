import React from "react";
import "./Process.scss";
import greypink from "../../assets/images/greypink.png";

export default function Process() {
  return (
    <>
      <div className="process">
        <div className="process__container">
          <h3 className="process__caption">PROCESS</h3>
          <h2 className="process__sub">Our Quick Process</h2>
          <p className="process__descr">
            Simply dummy text of the printing and typesetting industry.
          </p>

          <div className="process__ordercards">
            <div className="process__ordercard">
              <div className="process__images process__images--pink">
                <img src={greypink} alt="" />
              </div>
              <div className="process__orderstatus">1. Choose your Meat</div>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </div>

            <div className="process__ordercard">
              <div className="process__images process__images--blue">
                <img src={greypink} alt="" />
              </div>
              <div className="process__orderstatus">2. Quick Order</div>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </div>

            <div className="process__ordercard">
              <div className="process__images process__images--green">
                <img src={greypink} alt="" />
              </div>
              <div className="process__orderstatus">3. Find Doorstep</div>
              <p>
                s simply dummy text of the printing and typesetting industry.
                Lorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
