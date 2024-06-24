import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";
import { ItemCart } from "./ItemCart";

export const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const total = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <div className="w-1/3 bg-slate-50 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Carrito de compras</h1>

      <div className="gap-4 w-full grid grid-cols-3 mt-3">
        {cart.map((e) => {
          return <ItemCart key={crypto.randomUUID()} item={e} />;
        })}
      </div>
      <div className="w-full bg-black text-white">
        <h3>Total a pagar $ {total} </h3>
        <button
          className="mt-5 bg-orange-600 w-full p-3"
          onClick={(e) => setCart([])}
        >
          cerrar cuenta
        </button>
      </div>
    </div>
  );
};
