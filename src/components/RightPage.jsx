import PropTypes from "prop-types";

const RightPage = ({ children }) => (
  <div className="rightPage">
    {children}
    <div className="emptyBox"></div>
    <div className="emptyBox"></div>
  </div>
);

export default RightPage;

RightPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
