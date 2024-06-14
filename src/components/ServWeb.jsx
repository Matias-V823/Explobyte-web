import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import img from '../assets/portatil.jpg';
import imgweb from '../assets/servweb.png';
import hosting from '../assets/hosting.png';
import experto from '../assets/experto.png';

const ServWeb = () => {
  useEffect(() => {
    // Configuración de animación inicial
  }, []);

  return (
    <section className="website">
      <div className="oferta__grid">
        <motion.div
          className="text-grid"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <h2>Construimos tu página web por ti</h2>
          <div className='text-flex-servweb'>
            <div className='card-servweb'>
              <img className='img-servweb'  src={imgweb} alt="imagen-ordenador" />
              <p>Página Web Personalizada</p>
            </div>
            <div className='card-servweb'>
              <img className='img-servweb' src={hosting} alt="" />
              <p>Hosting + Dominio incluido</p>
            </div>
            <div className='card-servweb'>
              <img className='img-servweb' src={experto} alt="" />
              <p>Asesoramiento de Un experto</p>
            </div>
          </div>
          <p>
            Realizamos diversos tipos de sitios web como E-commerce, Portafolios, Cursos, etc.
          </p>
        </motion.div>
        <motion.div
          className="img-grid"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        >
          <img src={img} alt="Portatil" />
        </motion.div>
      </div>
    </section>
  );
}

export default ServWeb;
