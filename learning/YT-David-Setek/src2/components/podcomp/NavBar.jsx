import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/netflix.png";
import links from "../data/data3";

const NavBar = () => {
  const [shMenu, setShMenu] = useState(false);

  function menuClickHandler() {
    setShMenu(!shMenu);
  }

  return (
    <>
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <img src={logo} alt="" />
            <button onClick={menuClickHandler}>
              <FaBars className="menu-icon" />
            </button>
          </div>
          <div className={shMenu ? "nav-list show" : "nav-list hide"}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>
                    <p>{item.text}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
