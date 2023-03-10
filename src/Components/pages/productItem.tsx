import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ourProducts } from "../products";
import { productItem } from "../intefaces";
const ProductItem: React.FC = () => {
  const location: any = useLocation();

  const [targetProduct, setTargetProduct] = useState<productItem | null>();

  const actualityProductName: string = location.pathname.slice(1);

  useEffect(() => {
    const targetProduct = ourProducts.filter(
      (item: productItem) => item.title === actualityProductName
    );

    // handleChangeCurrentTest();
  }, []);

  return <div></div>;
};

export default ProductItem;
