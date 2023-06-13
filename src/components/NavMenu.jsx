import PropTypes from "prop-types";

const NavMenu = ({ active, onClick, children }) => (
  <div className={`navMenu ${active ? "active" : null}`}>
    <div className="menu-container" onClick={onClick}>
      <div className="nav-menu"></div>
      <div className="nav-menu"></div>
      <div className="nav-menu"></div>
    </div>
    {children}
  </div>
);

export default NavMenu;

NavMenu.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
