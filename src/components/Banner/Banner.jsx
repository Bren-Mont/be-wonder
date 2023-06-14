import React from "react";
import "./banner.css";
import { Box, Button, Grid, Typography } from "@mui/material";
const Banner = () => {
  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              gutterBottom
              margin={0}
              color="primary"
              fontWeight="500"
              paddingLeft={{ xs: 2, md: 3 }}
            >
              Be Wonder
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              margin={0}
              color="secondary"
              component="span"
              paddingLeft={{ xs: 2, md: 3 }}
            >
              INSURANCE
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              margin={0}
              paddingLeft={{ xs: 2, md: 3 }}
            >
              ¡Protege lo que más valoras con nuestro servicio de seguros!
            </Typography>
          </Grid>
          <Grid item xs={12} marginLeft={{ xs: 2, md: 3 }} marginTop={2}>
            <Button variant="contained" color="secondary">
              Cotizar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} position="relative">
          <div class="shape1"></div>

          <img src="/banner.png" alt="Be wonder" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
  /* return (
    <div className="contenedor">
      <div className="pattern-layer-1">
        <div className="pattern-layer-2">
          <div class="container">
            <img
              width={400}
              src="http://probandoclick.click/quimicos/wp-content/uploads/2023/05/BEWONDER-LETRAS-02-2.png"
              alt="Slider"
            />
            <h2 class="title">
              <span class="title-word title-word-1">Seguros </span>
              <span class="title-word title-word-2">para </span>
              <span class="title-word title-word-3">todo </span>
              <span class="title-word title-word-4">y todos.</span>
            </h2>
            <a href="/">
              <button class="bn30">cotizar</button>
            </a>
          </div>
          <div>
            <img
              className="img-safe"
              src="http://ftpdemo.com/introz/wp-content/uploads/2022/09/vector-2.png"
              alt="Slider"
            />
          </div>
        </div>
      </div>
    </div>
  ); */
};

export default Banner;
