import React from 'react';
import Img from '../assets/Explobyte Blanco.png';
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {

    return (
        
        <div className="pd header__grid">
            <div className="header__texto">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >

                    ¡Explora nuevas fronteras digitales con Explo<span id="header__texto__span">byte!</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >


                    <TypeAnimation
                        sequence={[
                            'Tecnología que impulsa a transformar tu negocio.',
                            1000, //Tiempo de pausa en milisegundos
                            'Transformamos tu Visión en Realidad Digital',
                            1000,
                            'Creando Webs, Chatbots y Apps de Vanguardia',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block' }}
                        repeat={Infinity}
                    />



                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="button__header"
                >
                    <span className="text">Saber más</span>
                </motion.button>
            </div>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeatDelay: 1
                }}
                className="header__imagen"
            >
                <img src={Img} alt="imagen__flex" />
            </motion.div>
        </div>
    );
};

export default Hero;
