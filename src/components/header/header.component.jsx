import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.css';

import CartIcon from '../cart-icon/cart-icon.component'

const Header = () => {
    return (
        <div className='header'>
            <div className='options'>
                <Link className='option' to='/' >SHOP</Link>
                <Link className='option' to='/' >ABOUT</Link>
            <CartIcon />
            </div> 
        </div>
    );
};



export default Header;