export const ItemCart = ({ item }) => {
  return (
    <div className="bg-slate-200 w-full p-2">
      {item.nombre} <span className="font-semibold"> {item.precio} </span>
    </div>
  );
};
