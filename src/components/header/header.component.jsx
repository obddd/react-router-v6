import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './header.style.css';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {Context} from '../../context/GlobalContext';


const Header = () => {
    const { hidden } = useContext(Context)
    return (
        <div className='header'>
            <div className='options'>
                <Link className='option' to='/' >SHOP</Link>
                <Link className='option' to='/' >ABOUT</Link>
            <CartIcon/>
            {
                hidden ? null : <CartDropdown/>
            }
            </div> 
        </div>
    );
};



export default Header;