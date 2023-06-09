import PropTypes from "prop-types";

const LeftPage = ({ children }) => (
  <div className="leftPage">
    <div className="emptyBox"></div>
    <div className="emptyBox"></div>
    {children}
  </div>
);

export default LeftPage;

LeftPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
