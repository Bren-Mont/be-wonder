import React from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import "./home.css";
import FAQS from "../components/FAQ/FAQS";
import Footer from "../components/Footer/Footer";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import { Box } from "@mui/material";

const home = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Banner />
      <Services />
      <FAQS></FAQS>
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default home;
