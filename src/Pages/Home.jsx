import React from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
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

      <Services />
      <FAQS></FAQS>
      <Testimonials />
      <Footer />
    </>
  );
};

export default home;
