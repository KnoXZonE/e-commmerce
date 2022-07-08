import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (

    <div className="main__header">
      <div className="wrapper">
        <nav className="header__nav">
          {/* hamburger button */}
          <button className="menu__btn">
            <span className="btn__inner">
              <span className="bar"></span>
              <span className="text">Menu</span>
            </span>
          </button>

          {/* logo */}
          <Link to="/" exact="true" className="navbar__logo">
            <p className="logo__title">
              <span>e</span>-Mart
            </p>
            <p className="logo__slogan">
              <span>Your Product is here</span>
            </p>
          </Link>

          {/* cart button */}
          <button className="cart__btn">
            <span className="btn__inner">
              <span className="icon">
                <ShoppingCart />

                <span className="item__count">2</span>
              </span>
              <span className="text">Cart</span>
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
