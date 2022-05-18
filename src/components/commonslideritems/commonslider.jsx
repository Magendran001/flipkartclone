import React, { Component } from "react";
import Slider from "react-slick";
import "./commonslider.css"
import { Deals_of_the_day } from "../../assets/bodymaterials/Allbodypartsdata";

const Commonslider=({data})=> {
    console.log(data,"jjjjjjjjjjjjjjjjjj")
  
    const settings = {
      
        infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7
    };
    return (
      <div className="flipkart_commonslider">
       
        <Slider {...settings}>
          
          {data.map((e)=>{return <div className="Common_slider_Each">
               
               <div>
                   <img src={e.images} alt=""  />
               </div>
               <div>
                   <p>{e.title}</p>
               </div>
               <div>
               <p>{e.price}</p>
               </div>
               <div>
               <p>{e.Short_desc}</p>
               </div>
               
          </div>})}
          
        </Slider>
      </div>
    );
  }
export default Commonslider


// {
//     images: "https://rukminim2.flixcart.com/flap/150/150/image/43d9c318e1076cb2.jpeg?q=70",
//     title: "Maxi Dresses,Bra,Night...",
//     price: 230,
//     Short_desc: "maggi",
// },