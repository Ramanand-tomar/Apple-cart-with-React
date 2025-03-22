import React, { useContext } from "react";
import { Link, useLocation } from "react-router";
import Shop_by_category from "./Shop_by_category";
import DataContext from "../context/DataContext";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Products = ({ items }) => {
  const { pathname } = useLocation();
  const { addtocart } = useContext(DataContext);

  return (
    <>
      <ToastContainer />
      {pathname == "/" && <Shop_by_category />}
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          {items.map((product) => {
            return (
              <div
                key={product.id}
                className="col-lg-4 col-md-6 my-3 row d-flex justify-content-center"
              >
                <div className="card product-card" style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    className="image-container"
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt={product.title}
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="product-price"> ₹{product.price}</p>
                    <div className="button-container">
                      <button
                        className="btn add-to-cart"
                        onClick={() =>
                          addtocart(
                            product.id,
                            product.title,
                            product.price,
                            product.imgSrc
                          )
                        }
                      >
                        🛒Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
