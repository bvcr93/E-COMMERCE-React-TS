import { popularProducts, Product } from "../data";
import { createContext, ReactNode, useEffect, useState } from "react";

type Cart = { [productId: string]: number };

type CartContextType = {
  cartItems: Cart;
  setCartItems: (cart: Cart) => void;
addToCart: (itemId: number) => void
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let i = 1; i < popularProducts.length + 1; i++) {
    cart[i.toString()] = 0;
  }
  return cart;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());

  const addToCart = (itemId: number) => {
   const res = setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
   console.log(cartItems);
   
  };

  const cartContextValue: CartContextType = {
    cartItems,
    setCartItems,
   addToCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
