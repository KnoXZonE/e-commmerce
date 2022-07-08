import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";

import { Eyeglasses, ShoppingCart, Star } from "phosphor-react";

import "./products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const [{ data }] = useContext(ProductContext);
  return (
    <div className="products__section">
      <div className="wrapper">
        <h2 className="title">Popular Products</h2>

        <div className="products__grid">
          {data.map((product) => {
            const { id, title, image, rating, category, price } = product;

            return (
              <Link to={`/product/${id}`} className="product__card" key={id}>
                <div className="product__img">
                  <img src={image} alt={title} />
                </div>

                <div className="product__details">
                  <h3 className="product__title">{title}</h3>
                  <p className="product__category">{category}</p>
                  <div className="product__bottom">
                    <p className="product__rating">
                      <Star />
                      {rating.rate}
                    </p>
                    <p className="product__price">$ {parseInt(price)}</p>
                  </div>
                </div>

                <div className="product__cta">
                  <button className="cta__btn">
                    <span>
                      <ShoppingCart />
                      Add to Cart
                    </span>
                  </button>

                  <button className="cta__btn cta__outline">
                    <span>
                      <Eyeglasses />
                      View Product
                    </span>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
