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
              <h1>{targetProduct.title}</h1>
              <p>${targetProduct.price} USD</p>
              {targetProduct.sizes && (
                <div>
                  <p>Size</p>
                  <ul>
                    {targetProduct.sizes.map((size: string, index: number) => (
                      <li key={index}>{size}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Quantity</p>
              <div>
                <span>-</span>
                <span></span>
                <span>+</span>
              </div>
              <div>Add to cart</div>
              <div>Buy it now</div>
              <div>
                {targetProduct.listInfo?.map((item: string, index: number) => (
                  <div key={index}>
                    <h5>{item}</h5>
                    <p>
                      {targetProduct?.descriptions &&
                        targetProduct?.descriptions[index]}
                    </p>
                  </div>
                ))}
              </div>
              {targetProduct.listName && (
                <div>
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
      <div>
        <div>
          <h5>Free Shipping</h5>
          <p>
            Pair text with an image to focus on your chosen product, collection,
            or blog post. Add details on availability, style, or even provide a
            review.
          </p>
        </div>
        <div>
          <h5>Hassle-Free Exchanges</h5>
          <p>
            Pair text with an image to focus on your chosen product, collection,
            or blog post. Add details on availability, style, or even provide a
            review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
