import React from "react";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Card/Cards";
import Testimonials from "../components/Testimonials/Testimonials";
import "./home.css";
import FAQS from "../components/FAQ/FAQS";
import Footer from "../components/Footer/Footer";
import ResponsiveAppBar from "../components/Navbar/Navbar";

const home = () => {
  return (
    <>
      <ResponsiveAppBar />
      {/* <Banner /> */}

      <Cards />
      <FAQS></FAQS>
      <Testimonials />
      <Footer />
    </>
  );
};

export default home;
