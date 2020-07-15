import React, { useContext } from 'react';
import './collection-item.style.css';
import CustomButton from '../custom-button/custom-button.component';
import { Context } from '../../context/GlobalContext'
import { Link } from "react-router-dom";

const CollectionItem = ({ item }) => {
    const { addItem } = useContext(Context)
    const { name, imageUrl, price, id } = item;
    return (
      <div className="collection-item">
        <Link to={`/product/${id}`}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        </Link>
        
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
      </div>
    );
};

export default CollectionItem;
