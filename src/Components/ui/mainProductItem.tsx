import React from "react";
import { productItem } from "../intefaces";

const MainProductItem: React.FC<productItem> = ({ img, price, title }) => {
  return (
    <div className='product__item-wrapper'>
      <img src={img} alt={title} className="product__item-img" />
      <h4 className="product__item-title">{title}</h4>
      <p className="product__item-price">${price} USD</p>
    </div>
  );
};

export default MainProductItem;
