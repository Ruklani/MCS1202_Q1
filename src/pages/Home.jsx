import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ProductList from "../components/ProductListCmp";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
