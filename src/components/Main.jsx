import { getAvailableFoods } from "../http";
import FoodCard from "./FoodCard";
import { useFetch } from "../hooks/useFetch";
export default function Main() {
  const {
    error,
    fetchedData: mealsData,
    isFetching,
  } = useFetch(getAvailableFoods);
  if (mealsData) {
    console.log(mealsData);
  }

  return (
    <>
      {isFetching && !error && <p>Fetching data</p>}
      {error && <p>{error.message}</p>}
      <div className="px-40 py-10 flex flex-wrap justify-center">
        {mealsData &&
          mealsData.map((data) => <FoodCard key={data.id} mealData={data} />)}
      </div>
    </>
  );
}
