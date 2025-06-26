import { NavLink } from "react-router";
import icon from "../assets/icon.png";
import "./H&F.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-icon">
        <img src={icon} />
        <h2>Movie Database</h2>
      </div>
      <div>
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/new" className="nav-link">
            New
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
