import React, {
  useContext,
  useState,
  createContext,
  useCallback,
  useMemo,
} from "react";
import { ProductType } from "../types";

type CartItem = {
  product: ProductType;
  amount: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (itemId: number) => void;
  removeSingleFromCart: (itemId: number) => void;
  quantityOfItem: (itemId: number) => number;
  totalPrice: number;
};

// Create the context
const cartContext = createContext<CartContextType | null>(null);

// Create the provider component
export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addToCart = useCallback(
    (product: ProductType) => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find((item) => item.product.id === product.id);
        if (existingItem) {
          const updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
          return prevCartItems.map((item) =>
            item.product.id === product.id ? updatedItem : item
          );
        } else {
          return [...prevCartItems, { product, amount: 1 }];
        }
      });
    },
    []
  );

  // Remove item from cart
  const removeFromCart = useCallback(
    (itemId: number) => {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.product.id !== itemId)
      );
    },
    []
  );

  // Remove single item from cart
  const removeSingleFromCart = useCallback(
    (itemId: number) => {
      setCartItems((prevCartItems) => {
        const existingItem = prevCartItems.find((item) => item.product.id === itemId);
        if (existingItem && existingItem.amount > 1) {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          return prevCartItems.map((item) =>
            item.product.id === itemId ? updatedItem : item
          );
        } else {
          return prevCartItems.filter((item) => item.product.id !== itemId);
        }
      });
    },
    []
  );

  // Calculate the total number of a specific item in the cart
  const quantityOfItem = useCallback(
    (itemId: number) => {
      const item = cartItems.find((item) => item.product.id === itemId);
      return item ? item.amount : 0;
    },
    []
  );

  // Calculate the total price of items in the cart
  const totalPrice = useMemo(
    () => cartItems.reduce((total, item) => total + item.product.price * item.amount, 0),
    [cartItems]
  );

  const value: CartContextType = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      removeSingleFromCart,
      quantityOfItem,
      totalPrice,
    }),
    [cartItems, addToCart, removeFromCart, removeSingleFromCart, quantityOfItem]
  );

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export function useCartContext(): CartContextType {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
