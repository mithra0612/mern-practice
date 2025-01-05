import React, { useContext, useState, createContext, Children } from "react";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const isExistingItem = prevCart.some(
        (cartItem) => cartItem.item == item.item
      );
      if (isExistingItem) {
        return prevCart;
      } else {
        return [...prevCart, item];
      }
    });
  };
  const deleteFromCart = (deleteItem) => {
    setCartItems((prevCart) => prevCart.filter(item => item.item !== deleteItem.item));
  }
  return (
    <CartContext.Provider value={{cartItems,addToCart,deleteFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
