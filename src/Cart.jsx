import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const total = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="w-1/3 bg-slate-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Carrito de compras</h1>
      {cart.map((e) => {
        return <ItemCart key={e.id} item={e} />;
      })}
      <div className="w-full bg-black text-white">
        <h3>Total a pagar $ {total} </h3>
      </div>
    </div>
  );
};
