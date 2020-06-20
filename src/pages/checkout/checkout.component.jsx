import React, { useContext } from 'react';
import './checkout.style.css';
import { Context } from '../../context/GlobalContext';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = () => {
  const { cartItems } = useContext(Context);
  const total = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.length
        ? cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        : null}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
