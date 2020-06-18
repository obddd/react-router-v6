import React, { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { Context } from '../../context/GlobalContext';


import './cart-icon.style.css';

const CartIcon= () => {
    const { cartItems, toggleCartHidden } = useContext(Context);
    const countItems = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
    return (
        <div className='cart-icon' onClick={() => toggleCartHidden()}>
            <ShoppingBagIcon className='shopping-icon' />
            <span className='item-count'>{countItems}</span>
        </div>
    );
};

export default CartIcon;