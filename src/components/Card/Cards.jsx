import * as React from "react";
import "./card.css";
import { cards } from "./constants";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function Cards({ title, image, text }) {
  
  return (
    <div className="container-cards">
   <h1 className='title-home'>Nuestros servicios</h1>

    <div className="card">
      
      {cards.map(({id, title, image, text}) => (
          <Card sx={{ maxWidth: 345 }} key={id}>
            <CardActionArea className='card-media'>
              <CardMedia
                component='img'
                height='auto'
                image={image}
                alt='green iguana'
              />
              <CardContent>
                <Typography className='title-card' gutterBottom variant='h5' component='div'>
                  {title}
                </Typography>
                <Typography className="text-card" >
                  {text}
                </Typography>
                <br />
                <Button className="button">
                  Cotizar
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
      ))}
    </div>
    </div>
  );
}
