import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';

const Formulario = () => {
    const form = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [esVisible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1600) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (esVisible) {
            controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
        } else {
            controls.start({ opacity: 0, x: -100, transition: { duration: 1 } });
        }
    }, [esVisible, controls]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setMessage(inputValue);
        setCharCount(inputValue.length);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fvld2f9', 'template_1oi4tbf', form.current, 'who41yQF-Khfhhq4x')
            .then(
                () => {
                    setIsSubmitted(true);
                    console.log('Mensaje Enviado!');
                },
                (error) => {
                    setError(error.text);
                    console.log('Error al enviar...', error.text);
                }
            );
    };

    return (
        <section className="contact">
            <div className="contact__grid">
                <div className="contact__text">
                    <motion.h2 animate={controls}>
                        Gracias por tu interés hacia Explo
                        <motion.span id="header__texto__span">byte!</motion.span>
                    </motion.h2>
                    <motion.p animate={controls}>
                        Nos encantaría saber más sobre tu proyecto. Por favor, completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
                    </motion.p>
                </div>
                <div className="contact__formulario">
                    {isSubmitted ? (
                        <div className="contact__message">
                            <h3>¡Gracias por contactarnos!</h3>
                            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formulario__grupo">
                                <label htmlFor="name">Nombre y Apellido</label>
                                <input type="text" id="name" name="user_name" maxLength="32" placeholder="Ej: Explobyte" required />
                            </div>
                            <div className="formulario__content">
                                <div className="formulario__grupo">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="text" id="phone" name="phone" maxLength="15" placeholder="+56 9 65279299" required />
                                </div>
                                <div className="formulario__grupo">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input type="email" id="email" name="user_email" maxLength="63" placeholder="Ej: tusitioweb@explobyte.com" required />
                                </div>
                            </div>
                            <div className="formulario__mensaje">
                                <div className="formulario__detalle">
                                    <label htmlFor="message">Detalle el servicio que le interesa solicitar</label>
                                    <span>{charCount}/256</span>
                                </div>
                                <textarea id="message" name="message" rows="4" maxLength="256" placeholder="Escribe aquí" value={message} onChange={handleInputChange} required></textarea>
                            </div>
                            <button type="submit" className="btn-form" value="Send">Enviar</button>
                        </form>
                    )}
                    {error && <p className="error">Error: {error}</p>}
                </div>
            </div>
        </section>
    );
}

export default Formulario;
