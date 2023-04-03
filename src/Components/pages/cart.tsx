import React from "react";
import { useSelector } from "react-redux";
import { cartItem } from "../intefaces";
import { Link } from "react-router-dom";

import CartItem from "../ui/cartItem";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const cartPrice = useSelector((state: any) => state.cart.cartPrice);

  return (
    <div className="container">
      <div className="cart__title-wrapper">
        <h1 className="cart__title">Your cart</h1>
        <Link className="cart__shopping-link" to="/products">
          Continue shopping
        </Link>
      </div>
      <table className="cart__table">
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {cartItems?.map((cartItem: cartItem) => (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              price={cartItem.price}
              count={cartItem.count}
              size={cartItem.size}
              title={cartItem.title}
              img={cartItem.img}
              unitPrice={cartItem.unitPrice}
            />
          ))}
        </tbody>
      </table>
      <div>
        <div className="cart__subtotal">
          <h4>Subtotal</h4>
          <span>${Math.round(parseFloat(cartPrice) * 100) / 100} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
