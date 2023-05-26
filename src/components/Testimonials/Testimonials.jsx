import * as React from "react";
import "./testimonials.css";
import { testimonials } from "./const-testimonials";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';

export default function Testimonials({ id, name, text, image }) {
  return (
    <div className="container-t">
      <h1 className='title-home'>Testimonios</h1>
   
    <div className="testimonials" >
      
      {testimonials.map(({id, name, text,image}) => (
          <Card sx={{ maxWidth: 345 }} key={id}>
            <CardActionArea>
              <CardContent  className="testtimonials-content">
                <Typography className="text-testimonials" >
                  {text}
                </Typography> <br />
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <Avatar  sx={{ width: 70, height: 70 }} alt="Remy Sharp" src={image} />
               
                <Typography className='title-testimonials' gutterBottom variant='h5' component='div' style={{ padding:10}}>
                  {name}
                </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
      ))}
    </div>
    </div>
  );
}
