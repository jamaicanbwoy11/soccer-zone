import React from 'react';
import './Carousel.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slick1 from '../../Assets/Images/Carousel/lebron18.jpg';
import slick2 from '../../Assets/Images/Carousel/freak-baner.jpg';
import slick3 from '../../Assets/Images/Carousel/Kyrie2.jpg';
import slick4 from '../../Assets/Images/Carousel/LEBRON.jpg';
import slick5 from '../../Assets/Images/Carousel/NBA2.jpg';
import slick6 from '../../Assets/Images/Carousel/WESTBROOK2.jpg';
import slick7 from '../../Assets/Images/Carousel/1b.jpg';
import Slider from 'react-slick';
function Carousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slick">
      <Slider {...settings}>
        <div className="slick__item">
          <img src={slick1} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick2} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick3} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick4} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick5} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick6} alt="jame-slicker" />
        </div>
        <div className="slick__item">
          <img src={slick7} alt="jame-slicker" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
