import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthenticationContext } from '../ContextAPI/AuthenticationProvider'; 

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
   
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.uid}`); 
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
          localStorage.removeItem(`cart_${user.uid}`); // Clear corrupted data
        }
      }
    }
  }, [user]);

  useEffect(() => {
    // Save the cart to localStorage whenever it changes, only if a user is logged in
    if (user) {
      localStorage.setItem(`cart_${user.uid}`, JSON.stringify(cart)); // Use the user ID to uniquely identify the cart
    }
  }, [cart, user]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      let newCart;

      if (productIndex > -1) {
        // Product already in cart, update quantity
        newCart = [...prevCart];
        newCart[productIndex].quantity += 1;
      } else {
        // Product not in cart, add with quantity 1
        newCart = [...prevCart, { ...product, quantity: 1 }];
      }

      return newCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      return newCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      });
      return newCart;
    });
  };

  // Optional: Clear cart on user logout
  const clearCart = () => {
    setCart([]);
    if (user) {
      localStorage.removeItem(`cart_${user.uid}`);
    }
  };

  return (
    <CartContext.Provider value={ {cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} }>
      {children}
    </CartContext.Provider>
  );
};


