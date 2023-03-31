import React from "react";
import { cartItem } from "../intefaces";

const CartItem: React.FC<cartItem> = ({
  title,
  count,
  id,
  img,
  price,
  size,
  unitPrice,
}) => {
  return (
    <tr>
      <td>
        <div>
          <img className="cart__item-img" src={img} alt="cart item" />{" "}
          <h5>{title}</h5>
        </div>
      </td>
      <td>
        <div>
          <span>{count}</span>
        </div>
      </td>
      <td>
        <p>{price}</p>
      </td>
    </tr>
  );
};

export default CartItem;
