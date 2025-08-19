import React from "react";

const ProductCard = ({ title, img }) => (
  <div className="border rounded-xl shadow-sm p-3 w-48">
    <img src={img} alt={title} className="w-full h-40 object-cover rounded-md mb-2" />
    <h3 className="text-sm text-center">{title}</h3>
  </div>
);

export default ProductCard;
