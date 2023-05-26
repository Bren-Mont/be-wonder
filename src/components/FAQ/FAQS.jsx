import * as React from 'react';
import { faqs } from "./constants-faq";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.css'
export default function FAQS({id,title,text}) {
  return (
    <div className='container-faqs'>
      <h1 className='title-faqs'>Resuelve tus dudas</h1>
    <div className='contain-testimonials'>
      {
        faqs.map(({id,title,text})=>
        <Accordion  className='accordion'key={id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
        
        )
      }
    </div>
    </div>
  );
}