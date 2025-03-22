import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { trendingProducts } from '../context/data';


const Trending_Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows:false
  };
  return (
    <>
    <div className='mt-5  '>
    <span className=' btn add-to-cart  fw-bold fs-4  text-dark'>Trending Items</span>
    <div className="slider-container my-5">
      <Slider {...settings} >
        {trendingProducts.map((product,index)=>(
          <div key={index} className='slider'>
            <img src={product.image} alt="" className='slide-image'
            style={{width:'180px' , height:'180px' , border:'1px solid blue'}} 
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Trending_Slider