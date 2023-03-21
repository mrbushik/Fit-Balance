import React from "react";

const Refund: React.FC = () => {
  return (
    <div className="container refund__container">
      <h1 className="refund__title-main">Refund policy</h1>
      <span>
        We have a 30-day return policy, which means you have 30 days after
        receiving your item to request a refund or an exchange. To be eligible
        for a refund or exchange, your item must be in the same condition that
        you received it, with tags, and in its original packaging. You’ll also
        need the receipt or proof of purchase. To start a refund or exchange,
        you can contact us at{" "}
        <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>.
        If your refund or exchange is accepted, we’ll send you a return shipping
        label, as well as instructions on how and where to send your package.
        Items sent back to us without first requesting a return or exchange will
        not be accepted. You can always contact us for any return questions at
        <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>.
        <div>
          <h4 className="refund__title">Damages and issues</h4>
          <p>
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and solve it as quickly as
            possible.
          </p>
        </div>
        <div className="fefund-text__wrapper">
          <h4 className="refund__title">
            European Union 14-day cooling off period
          </h4>
          <span>
            Notwithstanding the above, if the merchandise is being shipped into
            the European Union, you have the right to cancel or return your
            order within 14 days, for any reason and without a justification. As
            above, your item must be in the same condition that you received it,
            unworn or unused, with tags, and in its original packaging. You’ll
            also need the receipt or proof of purchase.
          </span>
        </div>
        <div className="fefund-text__wrapper">
          <h4 className="refund__title">Refunds</h4>
          <span>
            We will notify you once we’ve received and inspected your return,
            and let you know if the refund was approved or not. If approved,
            you’ll be automatically refunded on your original payment method
            within 10 business days. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.
            If more than 15 business days have passed since we’ve approved your
            return, please contact us at{" "}
            <a href="mailto: support@fitnbalance.com">
              support@fitnbalance.com
            </a>
          </span>
        </div>
      </span>
    </div>
  );
};

export default Refund;
