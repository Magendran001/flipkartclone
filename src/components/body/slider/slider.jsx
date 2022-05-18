import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    
    return (
      <div
        className={className}
        style={{ ...style,display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }
  

 const AutoPlay =()=>{
//   render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow className="slick_Arrow" />,
      prevArrow: <SamplePrevArrow className="slick_Arrow" />
    };
    return (
      <div className="slider">
        
        <Slider {...settings}>
          <div className="image_div">
           <img src="https://rukminim2.flixcart.com/flap/3376/560/image/bc613147ffe08c72.jpg?q=50" alt="" />
          </div>
          <div className="image_div">
          <img src="https://rukminim2.flixcart.com/flap/3376/560/image/3089bcf7cc17b41f.jpg?q=50" alt="" />
          
          </div>
          
        </Slider>
      </div>
    );
  }

  export default AutoPlay