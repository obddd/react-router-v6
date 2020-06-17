import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export const Context = createContext(INITIAL_STATE);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  };
  const removeItem = (item) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item,
    });
  };
  const removeItemFromCart = (item) => {
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
        hidden: state.hidden,
        cartItems: state.cartItems,
        addItem,
        removeItem,
        removeItemFromCart,
        toggleCartHidden,
      }}
    >
      {children}
    </Context.Provider>
  );
};
