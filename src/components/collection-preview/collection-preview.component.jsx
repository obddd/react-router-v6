import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.style.css';
// import { Link } from "react-router-dom";

const CollectionPreview = ({title, items}) => {
    console.log(items)
    return (
      <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items.map((item) => (
            // <Link key={item.id} to={`/product/${item.id}`}>
              <CollectionItem key={item.id} item={item} />
            // </Link>
          ))}
        </div>
      </div>
    );
};

export default CollectionPreview;