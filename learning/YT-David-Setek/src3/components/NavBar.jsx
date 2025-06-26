import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/movies">Movies</NavLink>
      <br />
      <NavLink to="/serials">Serials</NavLink>
      <br />
    </nav>
  );
};

export default NavBar;
