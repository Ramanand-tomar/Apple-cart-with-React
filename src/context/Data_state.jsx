import React, { useState } from 'react'
import DataContext from './DataContext'
import { items } from './data'
import { ToastContainer, toast ,Bounce} from 'react-toastify';

const Data_state = (props) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(items)
    const addtocart = (id,title,price,imgSrc)=>{
      const obj = {id , title , price,imgSrc};
      toast.success("item added to cart", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
      setCart([obj , ...cart]);
    }
const delete_item = (id)=>{
      toast.success("Item is deleted from your cart Succefully", {
        position: "top-right",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
      const users = [...cart];
      const index = users.findIndex(user => user.id === id);

      if (index !== -1) {
        users.splice(index, 1); // Remove 1 element at found index
      }

      setCart(users);
    }
  return (
    <DataContext.Provider value={{ products, setProducts ,cart , setCart ,addtocart , delete_item }} >{props.children}</DataContext.Provider>
  )
}

export default Data_state