import React, { useContext, useState } from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaClock,
  FaThLarge,
  FaRupeeSign,
} from "react-icons/fa";
import DataContext from "../context/DataContext";
import { items } from "../context/data";
const categories = [
  { name: "All Products", icon: <FaThLarge /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Tablets", icon: <FaTabletAlt /> },
  { name: "Watches", icon: <FaClock /> },
];

const priceRanges = [30000, 40000, 50000, 60000, 70000, 80000];
const Shop_by_category = () => {
  const { setProducts } = useContext(DataContext);
  const [selectedPrice, setselectedPrice] = useState(80000);

  // filter by category
  const filterbyCategory = (cat) =>{
    if(cat == "All Products"){
      setProducts(items) 
      return
    }
    setProducts(items.filter(pro=>pro.category.toLowerCase()===cat.toLowerCase()));

  }

  const filterByPrice = (price)=>{
    setProducts(items.filter(pro => pro.price <= price));
  }

  return (
    <>
      <div className="container bg-dark text-light my-4 p-4 rounded">
        <h3 className="text-center mb-3">Filter Products</h3>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
          {categories.map(({ name, icon }) => (
            <div
              key={name}
              className="d-flex align-items-center gap-2 px-3 py-3 rounded bg-secondary text-light fw-bold"
              style={{ cursor: "pointer" }}
              onClick={()=> filterbyCategory(name)}
            >
              {icon} <span>{name}</span>
            </div>
          ))}
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {priceRanges.map((value) => (
              <span
                key={value}
                className={`badge p-3 fw-bold ${
                  selectedPrice === value
                    ? "bg-warning text-dark"
                    : "bg-light text-dark"
                }`}
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                  fontSize: "1rem",
                  borderRadius: "10px",
                }}
                onClick={() => {
                  filterByPrice(value);
                }}
              >
                <FaRupeeSign /> {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop_by_category;
