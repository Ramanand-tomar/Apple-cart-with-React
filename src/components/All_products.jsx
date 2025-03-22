import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import Trending_Slider from './Trending_Slider';

import Products from "./Products"
import VideoPlayer from "./VideoPlayer";

const All_products = () => {
  const {products} = useContext(DataContext);
  return (
    <>
    <VideoPlayer src="https://www.apple.com/105/media/ww/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome3/xlarge_2x.mp4"/>
    <Trending_Slider/>
    <Products items={products}/>
    </>
  )
}

export default All_products