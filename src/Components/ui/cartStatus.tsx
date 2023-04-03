import React from "react";
import { Error, Success } from "../styles/icons";

interface cartStatusProps {
  error: boolean;
}

const CartStatus: React.FC<cartStatusProps> = ({ error }) => {
  return (
    <>
      {error ? (
        <div className="success__cart-status">
          <p>Item added to your cart</p>
          <Success />
        </div>
      ) : (
        <div className="success__cart-status error__cart-status">
          <p className="cart__status-size">Select the desired size</p>
          <Error />
        </div>
      )}
    </>
  );
};

export default CartStatus;
