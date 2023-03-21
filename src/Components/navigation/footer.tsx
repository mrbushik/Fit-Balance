import React from "react";
import { Link } from "react-router-dom";
import { AmerianExpress, ApplePay, PayPal, Visa } from "../styles/icons";
import { Mastercard } from "../styles/icons/mastercard";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <div className='link__footer-container'>
            <h5 className="footer-title">Info</h5>
            <Link to="FAQ">FAQs</Link>
            <Link to="/contact-us">CONTACT US</Link>
          </div>
          <div className='footer__mission'>
            <h5 className="footer-title">Our mission</h5>
            <p>
              Share contact information, store details, and brand content with
              your customers.
            </p>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <div className="footer-payments">
        <AmerianExpress />
        <ApplePay />
        <Mastercard />
        <PayPal />
        <Visa />
      </div>
      <p className='footer__organization'>© 2023, FitNBalance</p>
    </footer>
  );
};

export default Footer;
