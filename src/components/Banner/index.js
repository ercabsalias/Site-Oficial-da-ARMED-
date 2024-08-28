import React from "react";
import Slider from "react-slick";
import "./style.css";

import IMA from "../../assets/armed_d83c3524f780c05806227f.jpg";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider-item">
        <img src={IMA} alt="ARMED" />
      </div>
      <div className="slider-item">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
      <div className="slider-item">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
      <div className="slider-item">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
      <div className="slider-item">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
      <div className="slider-item">
        <img
          src="https://www.armed.gov.ao/img/logo/logoArmed.svg"
          alt="ARMED"
        />
      </div>
    </Slider>
  );
}
