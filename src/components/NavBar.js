import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/SearchDrinks">Search</Link>
    </div>
  );
};

export default NavBar;
