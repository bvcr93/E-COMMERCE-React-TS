import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


type CartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
  name: string 
};

interface ShoppingCartContext {

  getItemQty: (id: number) => number;
  increaseCartQty: (id: number, name: string) => void;
  decreaseCartQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQty: number;
  cartItems: CartItem[] ;

}
export const CartContext = createContext({} as ShoppingCartContext);

export function useShopingCart() {
  //custom hook which calls CartContext
  return useContext(CartContext);
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQty = cartItems.reduce((qty, item) => item.quantity + qty, 0);



  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQty(id: number, name: string ) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1, name }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, name };
          } else {
            return item;
          }
        });
      }
    });
    return cartItems;
}


  
  function decreaseCartQty(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        cartQty,
        cartItems,
     
      }}
    >
      {children}
 
    </CartContext.Provider>
  );
}