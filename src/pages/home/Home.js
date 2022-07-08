import React, { useContext } from "react";
import Products from "../../components/products/Products";
import SliderBanner from "../../components/slider-banner/SliderBanner";

function Home() {
  return (
    <div>
      <SliderBanner />
      <Products />
    </div>
  );
}

export default Home;
