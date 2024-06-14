import React from 'react'
import img from '../assets/Explobyte Negro.png'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__contenedor">
        <div class="footer-img">
          <img src={img} alt=""/>
        </div>
        <div class="footer__navegacion">
          <div class="footer-nav-list">
            <h3>Menu</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Quienes Somos</a></li>
              <li><a href="#">Trabajos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-nav-list">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Chatbot</a></li>
              <li><a href="#">Páginas Web</a></li>
            </ul>
          </div>
          <div class="footer-nav-list">
            <h3>Redes Sociales</h3>
            <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            <h3>Contacto</h3>
            <a href="mailto:tusweb@explobyte.com">tuweb@explobyte.com</a>
            <a href="tel:+56965279299"> +56 9 65279299</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Explobyte. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer