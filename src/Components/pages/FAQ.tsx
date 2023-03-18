import React from "react";
import { Link } from "react-router-dom";

const Faq: React.FC = () => {
  return (
    <div className="container">
      <div className="about__page-container">
        <h1 className="faq__main-title">FAQs</h1>
        <h5 className="faq-title">When I Will Be Able To Receive My Item?</h5>
        <p className="faq-description">
          We guarantee fast shipping and delivery within Australia. We ship our
          posture correctors right away to you after we have confirmed your
          purchase. Due to high demand, the majority of our customers receive
          their items within 2-4 weeks. Check out our Shipping Policy to know
          more about our delivery process.
        </p>
        <h5 className="faq-title">What Does My Order Status Mean?</h5>
        <p className="faq-description">
          You may find information about the status of your order on the{" "}
          <strong className="faq-strong">Order Status Menu.</strong>
        </p>
        <h5 className="faq-title">How Can I Issue A Refund?</h5>
        <p className="faq-description">
          We provide a 30-day refund policy for all of our customers. If the
          item is defective or you are not satisfied 100% with the item for
          whatever reason, you have the option to ship it back to us within the
          period of 30 days from the date of receiving the item and
          subsequently, you can request a refund. You just need to shoulder the
          cost of shipment back to us. You may check our Return Policy page for
          further details about our return and refund guidelines.
        </p>
        <p className="faq-description">
          For more enquiries, feel free to connect with our Support Team via
          live chat which is available between 9 AM and 9 PM Monday to Friday.
          You may also email us at sales@posturecorrectorshop.com or simply
          visit our
          <Link to={"/contact-us"} className='faq-link'>Contact Us</Link> page.
        </p>
      </div>
    </div>
  );
};

export default Faq;
