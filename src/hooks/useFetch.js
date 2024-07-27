import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [isFetching, setIsFetching] = useState(false);
  function formatPrices(data) {
    return data.map((prevItem) => {
      let new_item = { ...prevItem };
      const [dollar, cents] = prevItem.price.toString().split(".");
      new_item.price = { dollar: `${dollar}`, cents: cents };
      return new_item;
    });
  }

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const meals = await fetchFn();
        const price_formattedmeals = formatPrices(meals);
        setFetchedData(price_formattedmeals);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch the meal data",
        });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);
  return {
    error,
    fetchedData,
    isFetching,
  };
}
