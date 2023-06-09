import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => {
  const activeHome = {
    borderBottom:
      "var(--active-link-border-bottom) solid var(--color-theme-homePage)",
  };
  const activeProduct = {
    borderBottom:
      "var(--active-link-border-bottom) solid var(--color-theme-productPage)",
  };
  const activeCart = {
    borderBottom:
      "var(--active-link-border-bottom) solid var(--color-theme-cartPage)",
  };

  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeHome : null)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeProduct : null)}
            to="products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeCart : null)}
            to="cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <div className="logo">
        <h1>rip current</h1>
        <p>the surf company</p>
      </div>
      <div className="cart">
        <RiShoppingCartLine />
      </div>
    </nav>
  );
};

export default Navbar;
