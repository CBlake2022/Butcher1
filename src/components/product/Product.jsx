import React from "react";
import "./Product.scss";
import productchicken from "../../assets/images/productchicken.png";
import Button from "../button/Button";
import productbeef from "../../assets/images/productbeef.png";
import productpork from "../../assets/images/productpork.png";
import productborder from "../../assets/images/productborder.png";

export default function Product() {
  return (
    <>
      <div className="product">
        <div className="product__container">
          <div className="product__headings">
            <h3>
              <u>Resent Produ</u>cts
            </h3>
            <h2>Recent Products</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy
            </p>
          </div>

          <div className="product__cards">
            <div className="product__card">
              <div className="product__image">
                <img src={productbeef} alt="" />
              </div>
              <h3>Chicken For Nutritions</h3>
              <h2>Chicken 1 Kg Pack</h2>
              <p>
                Flowbase is the largest webflow resource site, with. Flowbase is
                the.
              </p>
              <div className="product__btn">
                <span>Add To Cart - $12</span>
              </div>
            </div>

            <div className="product__card">
              <div className="product__image">
                <img src={productchicken} alt="" />
              </div>
              <h3>Beef For Nutritions</h3>
              <h2>Beef 1 Kg Pack</h2>
              <p>
                Flowbase is the largest webflow resource site, with. Flowbase is
                the.
              </p>
              <div className="product__btn">
                <span>Add To Cart - $12</span>
              </div>
            </div>

            <div className="product__card">
              <div className="product__image">
                <img src={productbeef} alt="" />
              </div>
              <h3>Beef For Nutritions</h3>
              <h2>Beef 1 Kg Pack</h2>
              <p>
                Flowbase is the largest webflow resource site, with. Flowbase is
                the.
              </p>
              <div className="product__btn">
                <span>Add To Cart - $12</span>
              </div>
            </div>
            <div className="product__card">
              <div className="product__image">
                <img src={productpork} alt="" />
              </div>
              <h3>Pork For Nutritions</h3>
              <h2>Pork 1 Kg Pack</h2>
              <p>
                Flowbase is the largest webflow resource site, with. Flowbase is
                the.
              </p>
              <div className="product__btn">
                <span>Add To Cart - $12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
