import React from "react";
import Banner from "./Banner/Banner";
import FoodContainer from "./Foods/FoodContainer/FoodContainer";
import Footer from "./Footer/Footer";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodContainer></FoodContainer>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
