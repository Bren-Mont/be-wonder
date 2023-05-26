import React from 'react'
import './banner.css'
const Banner = () => {
  return (

    <div className="contenedor">
      <div className="pattern-layer-1">
        <div className="pattern-layer-2">
          <div class="container">
          <img width={400}  src="http://probandoclick.click/quimicos/wp-content/uploads/2023/05/BEWONDER-LETRAS-02-2.png"
              alt="Slider Image" />
            <h2 class="title">
              <span class="title-word title-word-1">Seguros </span> 
              <span class="title-word title-word-2">para </span>
              <span class="title-word title-word-3">todo </span>
              <span class="title-word title-word-4">y todos.</span>
            </h2>
            <a href="/"><button class="bn30">cotizar</button></a>
          </div>
          <div>
            <img className="img-safe" src="http://ftpdemo.com/introz/wp-content/uploads/2022/09/vector-2.png"
              alt="Slider Image" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Banner