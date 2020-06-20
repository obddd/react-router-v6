import React, { useContext } from 'react';
import './collection-item.style.css';
import CustomButton from '../custom-button/custom-button.component';
import { Context } from '../../context/GlobalContext'

const CollectionItem = ({ item }) => {
    const { addItem } = useContext(Context)
    const { name, imageUrl, price } = item;
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
            <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    );
};

export default CollectionItem;
