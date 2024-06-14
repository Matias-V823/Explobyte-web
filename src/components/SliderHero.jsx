import React from 'react'
import Slider from "react-slick";
import Hero1 from '../components/Hero';
import Hero2 from '../components/ServWeb';


const SliderHero = () => {

  var configuracion = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="slider-container">
      <Slider {...configuracion}>
        <div>
          <Hero1 />
        </div>
        <div>
          <Hero2 />
        </div>
      </Slider>
    </div>

  )
}

export default SliderHero