import * as React from "react";
import "./testimonials.css";
import { testimonials } from "./const-testimonials";
import Card from "@mui/material/Card";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader, Container, Grid, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

export default function Testimonials({ id, name, text, image }) {
  return (
    <Container sx={{ marginBottom: 5 }}>
      <Typography
        variant="h2"
        textAlign="center"
        color="secondary"
        fontWeight="900"
        paddingY={5}
      >
        Testimonios
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {testimonials.map(({ id, title, image, text }) => (
          <Grid
            item
            xs={12}
            md={4}
            key={id}
            style={{ display: "flex", alignSelf: "stretch" }}
          >
            <Card sx={{ width: "100%" }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    src={image}
                  >
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <FormatQuoteIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
