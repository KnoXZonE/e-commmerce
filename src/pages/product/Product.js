import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/productContext";
import "./product.scss";

const SingleProduct = () => {
  return <></>;
};

const Product = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    const fetchApiData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${title}`);
      const singleProduct = await res.json();
      setSingleProduct(singleProduct);
      console.log(singleProduct);
    };

    fetchApiData();
  }, []);

  return (
    <div className="product__section">
      <div className="wrapper">
        <div className="product__wrapper">
          {singleProduct.map((subpro) => {
            const { id, title, description, rating, category, price, image } =
              subpro;

            return (
              <div className="product__view" key={id}>
                <div className="product__img">
                  <img src={image} alt={title} />
                </div>

                <div className="product__details">
                  <p>{title}</p>
                  <p>{category}</p>
                  <p>{description}</p>
                  <p>{rating.rate}</p>
                  <p>{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
