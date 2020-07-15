import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/GlobalContext';
import './product.style.css';

const Product = () => {
  const { slug } = useParams();
  const { collections } = useContext(Context);
  const product = collections[0].items.find(
    (prod) => prod.id === parseInt(slug)
  );
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={product.imageUrl} height="420" width="327" alt="shoe" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{product.name}</h1>
          <h2>by Sneakers.com</h2>
          <p>
            Made from variety of materials,
            <br /> Silhouette sneaker is a unique combination of cult brands.
            <br />  Silhouettes feature the logo in SEGA's signature font 
            <br /> and come in several colorways.{' '}
          </p>
        </div>
        <div className="product-price-btn">
          <p>
            ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
