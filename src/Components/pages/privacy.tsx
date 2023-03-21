import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="container refund__container">
      <h1 className="refund__title-main">Privacy policy</h1>
      <span>
        This Privacy Policy describes how fitnbalance.com (the “Site” or “we”)
        collects, uses, and discloses your Personal Information when you visit
        or make a purchase from the Site.
      </span>
      <div>
        <h4 className="refund__title">Contact</h4>
        <span>
          After reviewing this policy, if you have additional questions, want
          more information about our privacy practices, or would like to ma
          <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>.
        </span>
      </div>
      <div>
        <h4 className="refund__title">Collecting Personal Information</h4>
        <span>
          When you visit the Site, we collect certain information about your
          device, your interaction with the Site, and information necessary to
          process your purchases. We may also collect additional information if
          you contact us for customer support. In this Privacy Policy, we refer
          to any information about an identifiable individual (including the
          information below) as “Personal Information”. See the list below for
          more information about what Personal Information we collect and why.
        </span>
        <h5 className="list__privacy-title">Device information</h5>
        <ul className="privacy-list">
          <li>
            <strong>Purpose of collection:</strong>to load the Site accurately
            for you, and to perform analytics on Site usage to optimize our
            Site.
          </li>
          <li>
            <strong>Source of collection:</strong>
            Collected automatically when you access our Site using cookies, log
            files, web beacons, tags, or pixels.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong>shared with our
            processor Shopify.
          </li>
          <li>
            <strong>Personal Information collected:</strong>
            version of web browser, IP address, time zone, cookie information,
            what sites or products you view, search terms, and how you interact
            with the Site.
          </li>
        </ul>
      </div>
      <div>
        <h5 className="list__privacy-title">Order information</h5>
        <ul>
          <li>
            <strong>Purpose of collection:</strong>to provide products or
            services to you to fulfill our contract, to process your payment
            information, arrange for shipping, and provide you with invoices
            and/or order confirmations, communicate with you, screen our orders
            for potential risk or fraud, and when in line with the preferences
            you have shared with us, provide you with information or advertising
            relating to our products or services.
          </li>
          <li>
            <strong>Source of collection:</strong>
            collected from you.
          </li>
          <li>
            <strong>Disclosure for a business purpose:</strong>
            shared with our processor Shopify, our payment processors Stripe and
            PayPal, our fulfilment service DSers.
          </li>
          <li>
            <strong>Personal Information collected:</strong>name, billing
            address, shipping address, payment information (including credit
            card numbers, PayPal account details shared with us), email address,
            and phone number.
          </li>
        </ul>
      </div>
      <div>
        <h5 className="list__privacy-title">Order information</h5>
        <ul>
          <li>
            <strong>Disclosure for a business purpose:</strong>
          </li>
          <li>
            <strong>Purpose of collection:</strong>to provide customer support.
          </li>
          <li>
            <strong>Source of collection: </strong>collected from you
          </li>
          <li>
            <strong>Disclosure for a business purpose</strong>shared with our
            processor Shopify and our e-mail provider; messages with our
            customer support team will not be publically disclosed.
          </li>
          <li>
            <strong>Personal Information collected:</strong>offline data,
            purchased marketing data/lists, and other information you provide
            via e-mail conversation with us in order to assist you with your
            order.
          </li>
        </ul>
      </div>
      <div>
        <h4 className="refund__title-minors">Minors</h4>
        <span>
          The Site is not intended for individuals under the age of 18. We do
          not intentionally collect Personal Information from children. If you
          are the parent or guardian and believe your child has provided us with
          Personal Information, please contact us at the address above to
          request deletion.
        </span>
      </div>
        <div>
            <h4 className="refund__title">Contact</h4>
            <span>
          <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>.
        </span>
        </div>
      <div>
        <h4 className="refund__title">Contact</h4>
        <span>
          <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>.
        </span>
      </div>
    </div>
  );
};

export default Privacy;
