import React, { useEffect, useState } from 'react';
import img1 from '../assets/landing-page.png';
import img2 from '../assets/bot-mobile.png';
import img3 from '../assets/telefono-inteligente.png'
import { motion, useAnimation } from "framer-motion";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Cards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 2 } });
        } else {
            controls.start({ opacity: 0, y: 50, transition: { duration: 2 } });
        }
    }, [isVisible, controls]);

    return (
        <main className="explobyte__grid">
            <div className="explobyte__card">
                <motion.div className="card" animate={controls}>
                    <img src={img1} alt="icono-web" />
                    <h3 className="card__heading">Diseño Web</h3>
                    <li className="card__listado">Tiendas en Línea</li>
                    <li className="card__listado">Sitios Web Corporativos</li>
                    <li className="card__listado">Noticias y Medios</li>
                    <li className="card__listado">y más</li>
                </motion.div>
                <motion.div className="card" animate={controls}>
                    <img src={img2} alt="icono-bot" />
                    <h3 className="card__heading">Chatbot de Ventas</h3>
                    <li className="card__listado">Disponibilidad 24/7</li>
                    <li className="card__listado">Programa reuniones</li>
                    <li className="card__listado">Respuesta Rápida</li>
                </motion.div>
                <motion.div className="card" animate={controls}>
                    <img src={img3} alt="icono-app" />
                    <h3 className="card__heading">App moviles</h3>
                    <li className="card__listado">Desarrollo iOS y Android</li>
                    <li className="card__listado">Interfaz amigable</li>
                    <li className="card__listado">Altamente personalizables</li>
                </motion.div>
            </div>
            <Element name="servicios" className="explobyte__servicios">
                <motion.div animate={controls}>
                    <h3 className="heading-subtitulo">Nuestros Servicios</h3>
                    <h2>Impulsamos tu negocio hacia la modernidad</h2>
                    <p className="servicios__texto">
                        En Explobyte, nos especializamos en el diseño de páginas web, desarrollo de chatbots de ventas y creación de aplicaciones móviles. 
                        Nuestro objetivo es ayudar a personas, pymes y grandes empresas a modernizar sus negocios, brindando soluciones tecnológicas que optimizan 
                        su presencia digital y mejoran su eficiencia operativa.
                    </p>
                    <button className="btn-53">
                        <div className="original">Saber más</div>
                        <div className="letters">
                            <span>S</span>
                            <span>A</span>
                            <span>B</span>
                            <span>E</span>
                            <span>R</span>&nbsp;
                            <span>M</span>
                            <span>Á</span>
                            <span>S</span>
                        </div>
                    </button>
                </motion.div>
            </Element>
        </main>
    );
};

export default Cards;
