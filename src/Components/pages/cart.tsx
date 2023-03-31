import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const cartPrice = useSelector((state: any) => state.cart.cartPrice);

  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default Cart;
