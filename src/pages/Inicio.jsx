import React from 'react'
import Hero from '../components/Hero'
import Cards from './Cards'
import Nosotros from './Nosotros'
import ServWeb from '../components/ServWeb'
import Formulario from '../components/Formulario'
import SliderHero from '../components/SliderHero'

const Inicio = () => {
  return (
    <div>
      <SliderHero/>
      <Cards/>
      <Nosotros/>
      <Formulario/>
    </div>

  )
}

export default Inicio