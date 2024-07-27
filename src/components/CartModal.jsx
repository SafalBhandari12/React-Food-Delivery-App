import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Cart from "./Cart";
import { FoodContext } from "./FoodContextProvider";
import CheckoutForm from "./CheckoutForm";

const CartModal = forwardRef(({}, ref) => {
  function handleClosing() {
    dialogRef.current.close();
    setIsCheckout(false);
  }
  const dialogRef = useRef();

  const { items } = useContext(FoodContext);

  const [isCheckout, setIsCheckout] = useState(false);

  let title, button;

  const buttonStyle = "px-3 py-2 bg-orange-400 text-gray-700 rounded-md mr-2";

  if (!isCheckout) {
    title = "Your Cart";
    if (items.length === 0) {
      button = <button className={`${buttonStyle} mt-2`}>Close</button>;
    } else {
      button = (
        <div className="text-right pt-2">
          <button onClick={handleClosing} className={buttonStyle}>
            Close
          </button>
          <button
            onClick={() => {
              setIsCheckout(true);
            }}
            className={buttonStyle}
          >
            Go to checkout
          </button>
        </div>
      );
    }
  } else {
    title = "Checkout";
    button = (
      <p className="mt-4 text-right">
        <button onClick={handleClosing} className={buttonStyle}>
          Close
        </button>
        <button className={buttonStyle}>Place Order</button>
      </p>
    );
  }

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
      close: () => {
        dialogRef.current.close();
      },
    };
  });

  return (
    <dialog ref={dialogRef} className="px-3 py-6 bg-[#E5E5CB] rounded-lg">
      <p className="text-3xl pb-3 font-semibold">{title}</p>
      {!isCheckout && <Cart />}
      {isCheckout && <CheckoutForm />}
      <form method="dialog">{button}</form>
    </dialog>
  );
});

export default CartModal;
