export async function getAvailableFoods() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw Error("Failed to fetch Data");
  }
  return resData;
}
