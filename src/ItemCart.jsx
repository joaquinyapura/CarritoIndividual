import { useContext } from "react";
import { MyContext } from "./context/CartContext";

export const ItemCart = ({ item }) => {
  const { cart, setCart } = useContext(MyContext);

  const deleteItem = (producto) => {
    setCart((prevCart) => prevCart.filter((e) => e.id !== producto.id));
    console.log(`Producto con id ${item.id} eliminado del carrito`);
  };

  return (
    <div className="bg-slate-200 w-full p-2">
      <div>
        {item.nombre} <span className="font-semibold"> {item.precio} </span>
        <button
          onClick={(event) => {
            deleteItem(item);
          }}
          className="px-2 aspect-square bg-red-400 rounded-full hover:bg-red-600"
        >
          x
        </button>
      </div>
    </div>
  );
};
