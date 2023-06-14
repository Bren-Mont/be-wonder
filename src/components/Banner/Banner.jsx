import React from "react";
import "./banner.css";
import { Box, Button, Grid, Typography } from "@mui/material";
const Banner = ({ drawer }) => {
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
          <Grid
            item
            xs={12}
            marginLeft={{ xs: 2, md: 3 }}
            marginTop={2}
            display={{ xs: "none", md: "flex" }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => drawer.setShowDrawer(true)}
            >
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
};

export default Banner;
