import { NavLink } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";

const Navbar = () => (
  <nav className="navBar">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="products">Products</NavLink>
      </li>
      <li>
        <NavLink to="cart">Cart</NavLink>
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

export default Navbar;
