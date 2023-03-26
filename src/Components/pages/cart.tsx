import React from "react";

const Cart: React.FC = () => {
  let test;
  let cart = localStorage.getItem("cart");
  if (cart) cart = JSON.parse(cart);
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
