import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>Mixer</h1>
      <div>
        <Link to="/DrinkDetails">
          <button>Get random drink</button>
        </Link>
      </div>
      or
      <div>
        <Link to="/SearchDrinks">
          <button>Choose your poison</button>
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
