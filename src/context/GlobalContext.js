import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import SHOP_DATA from '../components/directory/shop.data'

const initialState = {
  collections: SHOP_DATA,
  hidden: true,
  cartItems: [
    // {id: 1, name: "Brown Brim", imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png", price: 25},
    // {id: 2, name: "Blue Beanie", imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png", price: 18}
  ]
};

export const Context = createContext(initialState);



export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    });
  };
  const removeItem = (item) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    });
  };
  const clearItemFromCart = (item) => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item,
    });
  };
  const toggleCartHidden = () => {
    dispatch({
      type: 'TOGGLE_CART_HIDDEN',
    });
  };
  return (
    <Context.Provider
      value={{
        collections: state.collections,
        hidden: state.hidden,
        cartItems: state.cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        toggleCartHidden,
      }}
    >
      {children}
    </Context.Provider>
  );
};
