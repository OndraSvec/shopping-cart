import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navBar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="products">Products</NavLink>
    <NavLink to="cart">Cart</NavLink>
  </nav>
);

export default Navbar;
