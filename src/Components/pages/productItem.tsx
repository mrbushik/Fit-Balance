import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ourProducts } from "../products";
import { nanoid } from "nanoid";
import { cartItem, productItem } from "../intefaces";
import { useDispatch } from "react-redux";
import { addProductInCart } from "../redux/actions/cart";
import CartStatus from "../ui/cartStatus";
const ProductItem: React.FC = () => {
  //TO DO solve problem with o lot of re renders in this page
  const dispatch: any = useDispatch();
  const location: any = useLocation();
  const PRODUCT_SIZE = 10;

  const [productCount, setProductCount] = useState<number>(1);
  const [targetProduct, setTargetProduct] = useState<productItem | null>();
  const [productSize, setProductSize] = useState<string>("");
  const [statusCart, setStatusCart] = useState<boolean>(false);
  const [productError, setProductError] = useState(false);

  const actualityProductName: string = location.pathname.slice(PRODUCT_SIZE);

  useEffect(() => {
    const foundProduct: productItem | undefined = ourProducts.find(
      (item: productItem) => item.title === actualityProductName
    );
    setTargetProduct(foundProduct);
  }, []);

  useEffect(() => {
    if (statusCart) {
      const timer = setTimeout(() => {
        setStatusCart(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [statusCart]);

  const handleChangProductCount = (count: number) => {
    if (productCount === 1 && count === -1) return;
    setProductCount((perv) => perv + count);
  };

  const handleAddToCart = () => {
    const product: cartItem[] | cartItem = {
      id: nanoid(6),
      title: targetProduct?.title,
      img: targetProduct?.img,
      price: targetProduct ? targetProduct.price * productCount : 0,
      count: productCount,
      size: productSize,
      unitPrice: targetProduct?.price,
    };
    handleCheck(product);
  };

  const handleCheck = (product: cartItem[] | cartItem) => {
    if (
      (targetProduct?.sizes?.length && productSize === "") ||
      productCount === 0
    ) {
      setProductError(false);
      dispatch(addProductInCart(product));
    } else {
      setProductError(true);
    }

    setStatusCart(true);
  };

  const handleSize = (size: string) => setProductSize(size);

  return (
    <div>
      <div className="container">
        {targetProduct && (
          <div className="product__page-wrapper">
            <div>
              <img src={targetProduct.img} className="product__page-imgMain" />
            </div>
            <div className="product__page-specification">
              <h1 className="product__page-title">{targetProduct.title}</h1>
              <p className="product__page-price">${targetProduct.price} USD</p>
              {targetProduct.sizes && (
                <div className="product__page-sizes">
                  <p>Size</p>
                  <ul>
                    {targetProduct.sizes.map((size: string, index: number) => (
                      <li
                        key={index}
                        className={
                          productSize === size ? "product__size-active" : ""
                        }
                        onClick={() => handleSize(size)}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Quantity</p>
              <div className="product__page-quantity">
                <button
                  className="product__quantity-btn"
                  onClick={() => handleChangProductCount(-1)}
                >
                  -
                </button>
                <span className="product__quantity-value">{productCount}</span>
                <button
                  className="product__quantity-btn"
                  onClick={() => handleChangProductCount(1)}
                >
                  +
                </button>
              </div>
              <div className="product__page-btns">
                {statusCart && <CartStatus error={productError} />}
                <div className="product__btn-card" onClick={handleAddToCart}>
                  Add to cart
                </div>
                <div className="product__btn-now">Buy it now</div>
              </div>
              <div>
                {targetProduct.titles?.map((item: string, index: number) => (
                  <div key={index} className="product__info-block">
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
              Pair text with an image to focus on your chosen product,
              collection, or blog post. Add details on availability, style, or
              even provide a review.
            </p>
          </div>
          <div className="product__other-item">
            <h5>Hassle-Free Exchanges</h5>
            <p>
              Pair text with an image to focus on your chosen product,
              collection, or blog post. Add details on availability, style, or
              even provide a review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
