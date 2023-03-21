import React from "react";
import { productItem } from "../intefaces";
import MainProductItem from "./mainProductItem";

const testProduct: productItem[] = [
  {
    img: "https://via.placeholder.com/300x200",
    title: "Corrector 2.0",
    price: 25.99,
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "Dick 20cm",
    price: 99.99,
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "Big and used Pussy",
    price: 9.0,
  },
];
const AboutBrand: React.FC = () => {
  return (
    <div className="container">
      <h2 className="about__brand-title">Talk about your brand</h2>
      <p className="about__brand-description">
        Share information about your brand with your customers. Describe a
        product, make announcements, or welcome customers to your store.
      </p>
      <h3 className="featured__title">Featured products</h3>
      <div className="main__product-wrapper">
        {testProduct.map((item: productItem, index: number) => (
          <MainProductItem
            img={item.img}
            title={item.title}
            price={item.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutBrand;
