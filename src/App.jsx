import React, { useContext } from "react";
import { MyContext } from "./context/CartContext";
import data from "./data/data.json";
import { Item } from "./Item";
import { Cart } from "./Cart";

function App() {
  const { cart, setCart } = useContext(MyContext);

  return (
    <div className="w-full h-screen flex  ">
      <div className="w-2/3  bg-slate-800 flex flex-row gap-8">
        {data.map((e) => {
          return <Item key={e.id} item={e} />;
        })}
      </div>
      <Cart />
    </div>
  );
}

export default App;
