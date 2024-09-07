import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          console.error('Invalid cart data in localStorage');
        }
      } catch (e) {
        console.error('Failed to parse cart from localStorage:', e);
        localStorage.removeItem('cart'); // Clear corrupted data
      }
    }
  }, []);

 
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      let newCart;
  
      if (productIndex > -1) {
        // Product already in cart, update quantity
        newCart = [...prevCart];
        newCart[productIndex].quantity = parseInt(newCart[productIndex].quantity) + 1; // Correctly update the quantity
      } else {
        // Product not in cart, add with quantity 1
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }
  
      // Update local storage
      localStorage.setItem('cart', JSON.stringify(newCart));
  
      return newCart;
    });
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };
  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
  
      // Update local storage
      localStorage.setItem('cart', JSON.stringify(newCart));
  
      return newCart;
    });
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          // Ensure quantity does not go below 1
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
  
      // Update local storage
      localStorage.setItem('cart', JSON.stringify(newCart));
  
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
