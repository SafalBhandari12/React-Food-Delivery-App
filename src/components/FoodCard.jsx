import { useContext } from "react";
import { FoodContext } from "./FoodContextProvider";

export default function FoodCard({ mealData }) {
  const { addToCart } = useContext(FoodContext);
  return (
    <div className="w-[18rem]  bg-[#0F0F0F] m-3 rounded-md shadow-lg  shadow-gray-900 cursor-pointer">
      <img
        src={`./../../backend/public/${mealData.image}`}
        alt={mealData.name}
        className="object-center w-72 mx-auto rounded-t-md"
      />
      <div className="p-3 flex flex-col items-center space-y-3">
        <p className="font-bold text-xl">{mealData.name}</p>
        <p className="bg-neutral-700 text-yellow-400 font-semibold px-4 py-1 rounded-sm text-sm">
          ${mealData.price.dollar}.
          <sub className="text-xs">{mealData.price.cents}</sub>
        </p>
        <p className="text-sm text-center text-gray-300">
          {mealData.description}
        </p>
      </div>
      <div
        className="bg-yellow-500 text-slate-800 shadow-md w-28 mx-auto mb-3  text-center rounded-md p-2"
        onClick={() => addToCart(mealData)}
      >
        Add to Cart
      </div>
    </div>
  );
}
