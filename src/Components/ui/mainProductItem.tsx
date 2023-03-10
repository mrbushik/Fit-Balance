import React from "react";
import { productItem } from "../intefaces";
import { Link } from "react-router-dom";

const MainProductItem: React.FC<productItem> = ({ img, price, title }) => {
  return (
    <Link to={`products/${title}`} className="product__item-wrapper">
      <img src={img} alt={title} className="product__item-img" />
      <h4 className="product__item-title">{title}</h4>
      <p className="product__item-price">${price} USD</p>
    </Link>
  );
};

export default MainProductItem;
