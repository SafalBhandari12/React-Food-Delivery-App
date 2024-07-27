import { createContext, useMemo, useReducer } from "react";

export const FoodContext = createContext({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  calculateTotalCost: () => {},
});

function calculateTotalCost(items) {
  let total_cost = 0;
  items.forEach((item) => {
    total_cost +=
      (Number(item.price.dollar) + Number(item.price.cents / 100)) *
      item.quantity;
  });
  return total_cost;
}

function foodCartReducer(state, action) {
  // To function to add the item to the cart
  const mealData = action.payload;
  let new_items = [...state.items];

  const index = new_items.findIndex((item) => item.id === mealData.id);
  if (action.type === "ADD_ITEM") {
    if (index === -1) {
      new_items.push({ ...mealData, quantity: 1 });
    } else {
      new_items[index] = {
        ...new_items[index],
        quantity: new_items[index].quantity + 1,
      };
    }
    return { items: new_items };
  } else if (action.type === "REMOVE_ITEM") {
    console.log(mealData);
    if (new_items[index].quantity === 1) {
      new_items = new_items.filter((item) => item.id !== mealData.id);
      console.log(new_items);
    } else {
      new_items[index] = {
        ...new_items[index],
        quantity: new_items[index].quantity - 1,
      };
    }
    return { items: new_items };
  } else {
    return state;
  }
}

export default function FoodContextProvider({ children }) {
  const [foodCartState, foodCartDispatch] = useReducer(foodCartReducer, {
    items: [],
  });

  function handleAddToCart(item) {
    foodCartDispatch({ type: "ADD_ITEM", payload: item });
  }
  function handleRemoveFromCart(item) {
    foodCartDispatch({ type: "REMOVE_ITEM", payload: item });
  }

  const ctxValue = useMemo(
    () => ({
      items: foodCartState.items,
      addToCart: handleAddToCart,
      removeFromCart: handleRemoveFromCart,
      calculateTotalCost: calculateTotalCost,
    }),
    [foodCartState.items]
  );

  return (
    <FoodContext.Provider value={ctxValue}>{children}</FoodContext.Provider>
  );
}
