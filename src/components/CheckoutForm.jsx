import { useContext } from "react";
import { FoodContext } from "./FoodContextProvider";

export default function CheckoutForm() {
  const { calculateTotalCost, items } = useContext(FoodContext);
  const totalCost = calculateTotalCost(items);
  return (
    <div className="pr-10">
      <p className="text-xl">Total amount ${totalCost}</p>
      <div className="flex flex-col space-y-1">
        <p className="font-semibold">Full Name</p>
        <input type="text" className="w-72 h-8 p-2 outline-none" />
        <p className="font-semibold">Email Address</p>
        <input type="text" className="w-72 h-8 p-2 outline-none" />
        <p className="font-semibold">Street</p>
        <input type="text" className="w-72 h-8 p-2 outline-none" />
      </div>
    </div>
  );
}
