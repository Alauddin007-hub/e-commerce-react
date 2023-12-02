import React from "react";
import HomeSlider from "../components/HomeSlider";
import Feature from "../components/Feature";
import Product from "../components/Product";
import Banner from "../components/Banner";
import WkProduct from "../components/WkProduct";
import Blog from "../components/Blog";
import Cart from "../components/Cart";
import Testimonial from "../components/Testimonial";
import Brand from "../components/Brand";
import TpBanner from "../components/TpBanner";

export default function Home() {
  return (
    <div>
      <main>
        <HomeSlider />

        <Feature />

        <Product />

        <Banner />

        <WkProduct />

        <TpBanner />

        <Brand />

        <Testimonial />

        <Cart />

        <Blog />
      </main>
    </div>
  );
}
