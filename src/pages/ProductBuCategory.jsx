import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Products from '../components/Products'
import { useParams } from 'react-router'
import { Videos , items } from '../context/data'
const ProductBuCategory = () => {
  const {cat} = useParams()
  const videobycategory = Videos.find(vid=>vid.category.toLowerCase() === cat.toLowerCase())

  const productsbycategory = items.filter(pro=>pro.category.toLowerCase() === cat.toLowerCase());
  return (
    <div>
      <VideoPlayer src={videobycategory.url}/>
      <Products items={productsbycategory}/>
    </div>
  )
}

export default ProductBuCategory