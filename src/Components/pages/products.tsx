import React from "react";
import { productItem } from "../intefaces";
import MainProductItem from "../ui/mainProductItem";
const testProduct: productItem[] = [
  {
    img: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/index_eq3bjk.jpg",
    title: "FITNBALANCE Adjustable Posture Corrector 2.0",
    price: 25.99,
  },
  {
    img: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/2_dp990s.jpg",
    title: "FITNBALANCE BackBridge Support",
    price: 25.99,
  },
  {
    img: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/3_f3wf0y.jpg",
    title: "FITNBALANCE Pistol Massager",
    price: 79.99,
  },
  {
    img: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/4_tl4h51.jpg",
    title: "FITNBALANCE ULTIMATE Posture Corrector 3.0",
    price: 49.99,
  },
  {
    img: "https://res.cloudinary.com/drfjcq9hg/image/upload/v1677602517/fit_balance/5_ne7pvq.jpg",
    title: "Neck & Shoulder Stretcher Orthopedic Pillow",
    price: 29.99,
  },
];

const Products: React.FC = () => {
  return (
    <div className="container">
      <h1 className='products__title'>Products</h1>
      <div className="main__product-wrapper">
        {testProduct.map((product) => (
          <MainProductItem
            img={product.img}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
