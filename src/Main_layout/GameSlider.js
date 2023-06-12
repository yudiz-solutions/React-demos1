import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import image from "../assets/landing-banner.jpeg";
import image_1 from "../assets/after-login-bg.png";
import image_2 from "../assets//main-slider-bg.jpg";
import image_3 from "../assets/offers-img.png";

function GameSlider() {
  const navigate = useNavigate();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  };
  const playgame = () => {
    console.log("click");
    navigate("/Game1");
  };
  return (
    <div>
      <Slider {...settings}>
        <div onClick={playgame}>
          <img src={image_1} className="slider_img" alt="logo" />
        </div>
        {/* <div onClick={playgame}>
          <img src={image} className="slider_img" alt="logo" />
        </div>
        <div onClick={playgame}>
          <img src={image_2} className="slider_img" alt="logo" />
        </div>
        <div onClick={playgame}>
          <img src={image_3} className="slider_img" alt="logo" />
        </div> */}
      </Slider>
    </div>
  );
}

export default GameSlider;
