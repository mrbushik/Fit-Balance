import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ourProducts } from "../products";
import { productItem } from "../intefaces";
const ProductItem: React.FC = () => {
  const PRODUCT_SIZE = 10;
  const location: any = useLocation();

  const [targetProduct, setTargetProduct] = useState<productItem | null>();

  const actualityProductName: string = location.pathname.slice(PRODUCT_SIZE);

  useEffect(() => {
    const foundProduct: productItem | undefined = ourProducts.find(
      (item: productItem) => item.title === actualityProductName
    );
    setTargetProduct(foundProduct);
  }, []);

  return (
    <div>
      <div className="container">
        {targetProduct && (
          <div className="product__page-wrapper">
            <div>
              <img src={targetProduct.img} className="product__page-imgMain" />
            </div>
            <div>
              <h1 className="produdct__page-title">{targetProduct.title}</h1>
              <p className="product__page-price">${targetProduct.price} USD</p>
              {targetProduct.sizes && (
                <div className="product__page-sizes">
                  <p>Size</p>
                  <ul>
                    {targetProduct.sizes.map((size: string, index: number) => (
                      <li key={index}>{size}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Quantity</p>
              <div className="product__page-quantity">
                <span className="product__quantity-btn">-</span>
                <span className="product__quantity-value">12</span>
                <span className="product__quantity-btn">+</span>
              </div>
              <div className="product__page-btns">
              <div className="product__btn-card">Add to cart</div>
              <div className="product__btn-now">Buy it now</div>
              </div>
              <div>

                {targetProduct.titles?.map((item: string, index: number) => (
                  <div key={index} className='product__info-block'>
                    <h5>{item}</h5>
                    <p>
                      {targetProduct?.descriptions &&
                        targetProduct?.descriptions[index]}
                    </p>
                  </div>
                ))}
              </div>
              {targetProduct.listName && (
                <div className="product__additional-wrapper">
                  <h5>{targetProduct.listName}</h5>
                  <ul>
                    {targetProduct.listInfo?.map(
                      (item: string, index: number) => (
                        <li key={item}>{item}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    <div className="container">
    <div className="product__page-other-wrapper">
        <div className="product__other-item">
          <h5>Free Shipping</h5>
          <p>
            Pair text with an image to focus on your chosen product, collection,
            or blog post. Add details on availability, style, or even provide a
            review.
          </p>
        </div>
        <div className="product__other-item">
          <h5>Hassle-Free Exchanges</h5>
          <p>
            Pair text with an image to focus on your chosen product, collection,
            or blog post. Add details on availability, style, or even provide a
            review.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
