import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const isExistingItem = prevCart.some(
        (cartItem) => cartItem.item === item.item
      );
      if (isExistingItem) {
        return prevCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const deleteFromCart = (deleteItem) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.item !== deleteItem.item)
    );
  };
  const updateQuantity = (itemToUpdate, newQuantity) => {
    if (newQuantity < 1) {
      deleteFromCart(itemToUpdate);
    } else {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.item === itemToUpdate.item
            ? { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }
            : item
        )
      );
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
