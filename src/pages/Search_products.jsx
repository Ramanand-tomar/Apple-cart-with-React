import React from 'react'
import { useParams } from 'react-router'
import { items } from '../context/data';
import Products from '../components/Products';

const Search_products = () => {

  const {term} = useParams();

  const Search_product = items.filter((pro)=>
  pro.title.toLowerCase().includes(term.toLowerCase()));




  
  return (
    <div>
      <Products items={Search_product}/>
    </div>
  )
}

export default Search_products