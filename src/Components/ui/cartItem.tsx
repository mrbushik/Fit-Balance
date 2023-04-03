import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItem } from "../intefaces";
import { Basket } from "../styles/icons";
import { deleteProductInCart } from "../redux/actions/cart";

const CartItem: React.FC<cartItem> = ({
  title,
  count,
  id,
  img,
  price,
  size,
  unitPrice,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const handleDeleteItem = (item: any) => {
    const targetProductsArr = cartItems.filter(
      (item: cartItem) => item.id !== id
    );
    dispatch(deleteProductInCart(targetProductsArr));
  };

  return (
    <tr className="cart__table-item">
      <td>
        <div className=" cart__item-title ">
          <img className="cart__item-img" src={img} alt="cart item" />{" "}
          <h5>{title}</h5>
        </div>
      </td>
      <td>
        <div className="cart__item-count">{count}</div>
      </td>
      <td>
        <p className="cart__item-price">${price}</p>
      </td>
      <td>
        <div className="cart__item-basket" onClick={handleDeleteItem}>
          <Basket />
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
