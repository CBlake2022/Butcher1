import React from "react";
import "./Faq.scss";
import dropdown from "../../assets/icons/dropdown.png";

export default function Faq() {
  return (
    <>
      <div className="faq">
        <div className="faq__container">
          <div className="faq__topblock">
            <h3>FAQ</h3>
            <h2>Have any questions in Mind?</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <div className="faq__cards">
            <div className="faq__largecard">
              <div className="faq__questiondropdown">
                <h5>Simply dummy text of the printing</h5>
                <img src={dropdown} alt="" />
              </div>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
            <div className="faq__smallcards">
              <div className="faq__smallcard">
                <h5>Simply dummy text of the printing</h5>
                <img src={dropdown} alt="" />
              </div>

              <div className="faq__smallcard">
                <h5>Simply dummy text of the printing</h5>
                <img src={dropdown} alt="" />
              </div>

              <div className="faq__smallcard">
                <h5>Simply dummy text of the printing</h5>
                <img src={dropdown} alt="" />
              </div>
              <div className="faq__smallcard">
                <h5>Simply dummy text of the printing</h5>
                <img src={dropdown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
