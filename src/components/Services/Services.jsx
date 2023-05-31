import * as React from "react";
import { insurances } from "./constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Container, Grid } from "@mui/material";

export default function Services() {
  return (
    <Container>
      <Typography
        variant="h2"
        textAlign="center"
        color="secondary"
        fontWeight="900"
        padding={5}
      >
        Nuestros servicios
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {insurances.map(({ id, title, image, text }) => (
          <Grid
            item
            xs={12}
            md={4}
            key={id}
            style={{ display: "flex", alignSelf: "stretch" }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="auto"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                    fontWeight="700"
                    color="primary"
                  >
                    {title}
                  </Typography>
                  <Typography className="text-card">{text}</Typography>
                  <br />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button fullWidth variant="contained" color="primary" sx={{ marginY: 5 }}>
        Quiero cotizar
      </Button>
    </Container>
  );
}
