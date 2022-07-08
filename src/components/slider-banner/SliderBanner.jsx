import React, { useContext, useRef } from "react";
import "./slider-banner.scss";
import { ProductContext } from "../../context/productContext";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CaretLeft, CaretRight } from "phosphor-react";

const SliderBanner = () => {
  const controllerRef = useRef(null);
  const [{ data }] = useContext(ProductContext);

  const SliderConfig = {
    loop: true,
    fade: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    easing: "alternative",
  };

  console.log(controllerRef.current);

  return (
    <div className="banner__section">
      <div className="wrapper">
        <div className="slider__controller">
          <button
            className="controller__btn controller__prev"
            onClick={() => controllerRef.current.slickPrev()}
          >
            <span>
              <CaretLeft />
              <span className="text">Prev</span>
            </span>
          </button>
          <button
            className="controller__btn controller__next"
            onClick={() => controllerRef.current.slickNext()}
          >
            <span>
              <span className="text">Next</span>
              <CaretRight />
            </span>
          </button>
        </div>

        <Slider
          ref={controllerRef}
          className="banner__slider"
          {...SliderConfig}
        >
          {data.slice(0, 5).map((products) => {
            const { id, title, description, category, image } = products;
            return (
              <div className="slider__item" key={id}>
                <div className="slider__img">
                  <img src={image} alt={title} />
                </div>
                <div className="slider__details">
                  <h2 className="slider__category">{category}</h2>
                  <h3 className="slider__title">{title}</h3>
                  <p className="slider__desc">{description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderBanner;
