import React from 'react';
import './collection-item.style.css';
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({item : { name, imageUrl, price }}) => {
    return (
        <div className='collection-item'>
            <div 
            className='image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton>Add to cart</CustomButton>
        </div>
    );
};

export default CollectionItem;