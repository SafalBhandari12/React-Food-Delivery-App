import { useContext, useRef } from "react";
import FoodLogo from "./../assets/logo.jpg";
import { FoodContext } from "./FoodContextProvider";
import CartModal from "./CartModal";
export default function Header() {
  const { items } = useContext(FoodContext);

  const cartRef = useRef();


  function handleCartClick() {
    cartRef.current.open();
  }

  return (
    <>
      <CartModal
        ref={cartRef}
        action={handleCartClick}
      />
      <div className="py-6 px-28 flex items-center justify-between text-yellow-400">
        <div className="flex items-center space-x-2 ">
          <img
            src={FoodLogo}
            alt="React Food"
            className="w-14 rounded-full border-2 border-yellow-400 cursor-pointer"
          />
          <span className="cursor-pointer text-3xl tracking-wider font-semibold">
            REACTFOOD
          </span>
        </div>
        <p
          className="cursor-pointer text-2xl tracking-wide"
          onClick={handleCartClick}
        >
          Cart({items.length})
        </p>
      </div>
    </>
  );
}
