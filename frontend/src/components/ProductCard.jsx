import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = ({ product }) => {
  const imageUrl = product.imageUrl || '/1.jpg';

  return (
    <div className="product-card">
      <img
        src={imageUrl}
        alt={product.name}
        className="product-image"
        onError={(event) => {
          event.currentTarget.src = '/1.jpg';
        }}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">Rs. {product.price}</p>
        <Link to={`/product/${product._id}`} className="btn">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
