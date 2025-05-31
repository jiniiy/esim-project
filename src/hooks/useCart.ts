import { useEffect, useState } from "react";
import type { Plan } from "@/types";

const CART_KEY = "cartItems";

export const useCart = () => {
  const [cart, setCart] = useState<Plan[]>();

  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
        setCart([]);
      }
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    if (cart) {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (plan: Plan) => {
    if (!cart) return;
    setCart((prev) => {
      if (!prev) return [plan];
      if (prev.some((item) => item.id === plan.id)) return prev;
      return [...prev, plan];
    });
  };

  const removeFromCart = (id: number) => {
    if (!cart) return;
    setCart((prev) => prev?.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalPrice: cart?.reduce((sum, item) => sum + item.price, 0) ?? 0,
  };
};
