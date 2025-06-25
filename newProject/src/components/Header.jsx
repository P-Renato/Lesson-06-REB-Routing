import { NavLink } from "react-router-dom";
import './Header.scss';

function Header() {
  return (
    <header className="bg-gray-700 py-3 px-10 fixed w-full">
      <nav>
        <ul className="flex gap-x-4 text-gray-200">
          <li>
            <NavLink
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;