import React from "react";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import FeaturedMovie from "../components/Featured/FeaturedMovie";
import AllCategories from "../components/Categories/AllCategories";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <FeaturedMovie />
      <AllCategories />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
