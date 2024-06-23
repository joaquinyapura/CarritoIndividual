import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";

export const Item = ({ item }) => {
  const { cart, setCart } = useContext(MyContext);

  return (
    <button
      className="bg-slate-400  text-center p-2 h-[50px] rounded-full hover:bg-green-300  "
      onClick={() => {
        console.log(item);
        setCart((currItem) => [
          ...currItem,
          {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
          },
        ]);
      }}
    >
      {item.nombre}
    </button>
  );
};
