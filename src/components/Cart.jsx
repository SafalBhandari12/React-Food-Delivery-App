import { useContext } from "react";
import { FoodContext } from "./FoodContextProvider";

export default function Cart() {
  const { items, removeFromCart, addToCart, calculateTotalCost } =
    useContext(FoodContext);
  return (
    <div className="">
      {items.length === 0 && <p>There is no item available</p>}
      {items.length !== 0 && (
        <>
          <div className="flex flex-col text-xl">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between space-x-36 pb-3 text-xl"
              >
                <p className="font-">
                  {item.name} - {item.quantity} x ${item.price.dollar}
                  {""}.<sub>{item.price.cents}</sub>
                </p>
                <div className="flex space-x-2">
                  <button
                    className="bg-gray-700 text-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="bg-gray-700 text-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="self-end">Total: ${calculateTotalCost(items)}</div>
          </div>
        </>
      )}
    </div>
  );
}
