import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';

const Nosotros = () => {
  const[esVisible, setVisible] = useState(false);
  const controlsH1 = useAnimation();
  const controlsP = useAnimation();


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >1000){
        setVisible(true);
      }else{
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  useEffect(() => {
    if(esVisible){
      controlsH1.start({ opacity: 1, x: 0, transition: { duration: 2 } });
    }else{
      controlsH1.start({ opacity: 0, x: -100, transition: { duration: 2 } });
    }
  }, [esVisible,controlsH1]);



  useEffect(() => {
    if(esVisible){
      controlsP.start({opacity: 1, y: 0, transition: { duration: 1.5 }});
    }else{
      controlsP.start({opacity: 0, y: 100, transition: { duration: 1.5 }});
    }
  }, [esVisible, controlsP]);

  return (
    <section className="about">
      <div className="about__contenedor">
        <motion.h2
          animate={controlsH1}
          className="about__heading"
        >
          Quiénes Somos
        </motion.h2>
        <motion.p

          animate={controlsP}
          className="about__text"
        >
          Somos un equipo de Ingenieros Civiles Informáticos dedicados a brindar soluciones tecnológicas
          avanzadas, con el conocimiento y la experiencia necesarias para satisfacer tus necesidades. Nuestro
          proyecto nace con el propósito de ayudar a empresas y personas en el país a explorar nuevos horizontes
          digitales, aprovechando el constante avance tecnológico actual. Creemos firmemente en la importancia de
          innovar y ofrecer productos de la más alta calidad.
          
          Actualmente, nuestros servicios incluyen Asesorías, Desarrollo de páginas web, Aplicaciones móviles y
          Chatbots para ventas.
        </motion.p>
        <h5>Síguenos en: </h5>
        <div className='about-redes-sociales'>
          <img className='img-servweb' src={instagram} alt="" />
          <img className='img-servweb'  src={facebook} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
