import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import "./home.css";
import FAQS from "../components/FAQ/FAQS";
import Footer from "../components/Footer/Footer";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import { Box, Drawer } from "@mui/material";
import { Quote } from "../components/Form/Quote";

const home = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const drawer = {
    showDrawer,
    setShowDrawer,
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowDrawer(false);
  };

  return (
    <Box>
      <ResponsiveAppBar drawer={drawer} />
      <Banner />
      <Services />
      <FAQS></FAQS>
      <Testimonials />
      <Footer />
      <Drawer
        anchor="right"
        open={showDrawer}
        sx={{ auto: 250 }}
        onClose={toggleDrawer}
      >
        <Quote />
      </Drawer>
    </Box>
  );
};

export default home;
