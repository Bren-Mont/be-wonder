import React, { useState } from "react";
import "./navbar.css";
import MyDrawer from "../Menu/Menu";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className='navbar'>
        <header>
          <nav>
                <img
                  className='logo'
                  width={70}
                  height={70}
                  src='http://probandoclick.click/quimicos/wp-content/uploads/2023/03/BEWONDER_01.png'
                  alt=''
                  srcset=''
                />
              
                <button className='button-cot' onClick={handleToggleMenu}>
                  Cotizar
                </button>
                <MyDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
  
          </nav>
        </header>
      </div>
      
    </div>
  );
};

export default Navbar;
