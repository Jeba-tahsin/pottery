import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer" style={{ padding: "10px" }}>
      <h2>CONTACT US</h2>
      <p>Block-102/B Shibgonh Dhaka-200, Bangladesh</p>
      <div className="container">
        <div className="py-3 row">
          <div className="col-md-3 pe-4">
            <BsFacebook />
            <h6>FACEBOOK</h6>
            <p>Join our pages to view more vase and tip to decorate with them</p>
          </div>
          <div className="col-md-3 pe-4">
            <FaInstagramSquare />
            <h6>INSTAGRAM</h6>
            <p>Order your favourite pot from pages</p>
          </div>
          <div className="col-md-3 pe-4">
            <BsTwitter />
            <h6>TWITTER</h6>
            <p>Follow our account to see update collection</p>
          </div>
          <div className="col-md-3 pe-4">
            <BsFillTelephoneFill />
            <h6>Call Now</h6>
            <p>For any inquery you can call us</p>
          </div>
        </div>
      </div>
      <div>
        <small>2021 ©Copyright. All Rights Reserved</small>
      </div>
    </div>
    );
};

export default Footer;