import FoodContextProvider from "./components/FoodContextProvider";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <FoodContextProvider className="">
      <Header />
      <Main />
    </FoodContextProvider>
  );
}

export default App;
