import { NavLink } from "react-router-dom";
import css from "./Navbar.module.css";
import clsx from "clsx";

const getClassNames = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navbar = () => {
  return (
    <nav>
      <NavLink className={getClassNames} to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
