import React, { useContext } from "react";
import { useParams } from "react-router";
import { items } from "../context/data";
import Products from "../components/Products";
import "./Product_details.css";
import DataContext from "../context/DataContext";

const Product_details = () => {
  const { id } = useParams();
  const { addtocart } = useContext(DataContext);
  const product = items.find((pro) => pro.id == id);
  const related_products = items.filter(
    (pro) => pro.category.toLowerCase() == product.category.toLowerCase()
  );
  return (
    <div>
      <div className="container my-5">
        <div className="product-detail-card">
          <div className="image-section">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="product-image"
            />
          </div>
          <div className="info-section">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
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
      <h2 className="text-center my-5"> Related Products</h2>
      <Products items={related_products} />
    </div>
  );
};

export default Product_details;
