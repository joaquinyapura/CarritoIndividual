import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";
import data from "./data/data.json";
import { Item } from "./Item";
import { Cart } from "./Cart";

function App() {
  const { cart, setCart } = useContext(MyContext);

  return (
    <div className="w-full h-screen flex  ">
      <div className="w-2/3  bg-slate-800  p-10">
        <div className="grid grid-cols-5 gap-4">
          {data.map((e) => {
            return <Item key={e.id} item={e} />;
          })}
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default App;
