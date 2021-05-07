import "./App.css";

import { Switch, Route } from "react-router-dom";

import DrinkDetails from "./pages/DrinkDetails";
import HomePage from "./pages/HomePage";
import IngredienstsList from "./components/IngredientsList";
import SearchDrinks from "./pages/SearchDrinks";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/DrinkDetails" component={DrinkDetails} />
        <Route path="/SearchDrinks" component={SearchDrinks} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
