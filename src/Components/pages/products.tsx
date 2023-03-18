import React from "react";
import { productItem } from "../intefaces";
import MainProductItem from "../ui/mainProductItem";
import { ourProducts } from "../products";

const Products: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Products</h1>
      <div className="main__product-wrapper">
        {ourProducts.map((product) => (
          <MainProductItem
            img={product.img}
            title={product.title}
            price={product.price}
            key={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
