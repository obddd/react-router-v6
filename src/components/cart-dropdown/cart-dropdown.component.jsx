import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../../context/GlobalContext';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.style.css';

const CartDropdown = ({history}) => {
    const { cartItems, toggleCartHidden } = useContext(Context)
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {cartItems.length ? (
                    cartItems.map(
                        cartItem => <CartItem key={cartItem.id} item={cartItem} />
                    )
                ) : (<span className='empty-message'>Your cart is empty</span>)}
            </div>
            <CustomButton onClick={() => {history.push('/checkout'); toggleCartHidden()}}>Checkout</CustomButton>
        </div>
    );
};

export default withRouter(CartDropdown);