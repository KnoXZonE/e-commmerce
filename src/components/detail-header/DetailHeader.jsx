import { CaretDown, MagnifyingGlass, User } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

import "./detail-header.scss";

const DetailHeader = () => {
  return (
    <div className="detail__header">
      <div className="wrapper">
        <nav className="header__nav">
          <ul className="nav__menu">
            <li>
              <Link to="/" className="details__menu">
                USA
                <CaretDown />
              </Link>
            </li>
            <li>
              <Link to="/" className="details__menu">
                English
                <CaretDown />
              </Link>
            </li>
          </ul>

          <ul className="nav__menu">
            <li>
              <Link to="/" className="details__menu">
                <span className="link__text">Order Direct on:</span>{" "}
                <span>0123-456-789</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="details__menu">
                <button className="search__btn">
                  <MagnifyingGlass />
                </button>
              </Link>
            </li>
            <li>
              <Link to="/" className="details__menu">
                <button className="user__profile">
                  <User />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DetailHeader;
