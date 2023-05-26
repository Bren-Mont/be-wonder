import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const MyDrawer = ({isOpen, setIsOpen}) => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
  };

  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        open={isOpen}
        onClose={() => alert('1')}
      >
        
        <List>
        
          <ListItem>
            <label>
              Nombre y apellido
              <input
                type='text'
                //  value={value}
                onChange={handleSubmit}
                placeholder='Ingrese su nombre y apellido'
                required={true}
                maxLength={20}
              />
            </label>
          </ListItem>
          <ListItem>
            <label>
              Teléfono
              <input
                type='number'
                //  value={value}
               onChange={handleSubmit}
                placeholder='Ingrese su número de teléfono'
                required={true}
                maxLength={10}
              />
            </label>
          </ListItem>
          <ListItem>
            <label>
              ZIP Code
              <input
                type='number'
                //  value={value}
                //  onChange={handleChange}
                placeholder='Ingrese su código de area'
                required={true}
                maxLength={3}
              />
            </label>
          </ListItem>
          <ListItem>
            <label>
              Correo electrónico
              <input
                type='email'
                //  value={value}
                //  onChange={handleChange}
                placeholder='Ingrese su correo'
                required={true}
                maxLength={40}
              />
            </label>
          </ListItem>
          <ListItem>
            <label> Tipo de seguro
            <select
              name='mySelect'
              value={selectedOption}
              onChange={handleChange}
              disabled={false}
              required={true}
              className='my-select'
            >
              <option value=''>Seleccionar opción</option>
              <option value='option1'>Seguro de vida</option>
              <option value='option2'>Seguro de carro</option>
              <option value='option3'>Seguro de salud</option>
            </select>
            </label>
          </ListItem>
          <ListItem>
            <button type="submit">Enviar</button>
          </ListItem>
          
        </List>
      </Drawer>
      <form/>
    </div>
  );
};

export default MyDrawer;
