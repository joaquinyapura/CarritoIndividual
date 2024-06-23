import { createContext, useState } from "react";

export const MyContext = createContext();

const estadoInicial = [];

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState(estadoInicial);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
