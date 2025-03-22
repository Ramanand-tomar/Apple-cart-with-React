import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { Link } from "react-router";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Cart = () => {
  const { cart , setCart , delete_item} = useContext(DataContext);
  
  return (
    <div>
      <ToastContainer />
      <div className="container my-5">
        {cart.length == 0 ? (
          <div className="text-center ">
            <h1 className=" fs-10 py-2"> Your cart is empty</h1>
            <Link to={"/"} className="btn btn-danger mt-3">continue</Link>
          </div>
        ) : (
          <>
            <div className="row d-flex justify-content-center">
              {cart.map((product) => {
                return (
                  <div key={product.id} className="col-lg-8 col-md-10 my-3">
                    <div className="card cart-card">
                      <div className="row g-0 align-items-center">
                        <div className="col-md-4 flex justify-content-center">
                          <img src={product.imgSrc} className="cart-img" />
                        </div>
                        <div className="card-body text-center">
                          <h3 className="product-title">{product.title}</h3>
                          <p className="product-description">
                            {product.description}
                          </p>
                          <p className="product-price">{product.price}</p>
                          <div className="button-group">
                            <button className="btn add-to-cart ">
                              Buy Now
                            </button>
                            <button onClick={()=>{
                              delete_item(product.id);
                            }} className="btn delete-item  ">
                              Delete item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Checkout & Clear Cart Section */}
          <div className="text-center my-5">
            <button className="btn btn-warning mx-3">CheckOut</button>
            <button onClick={()=>{
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
              setCart([])}} className="btn btn-danger">
              Clear All Items
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
