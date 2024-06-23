import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";

export const Item = ({ item }) => {
  const { cart, setCart } = useContext(MyContext);

  return (
    <button
      className="bg-slate-400 w-[90px] h-[30px] rounded-full "
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
