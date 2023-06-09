import PropTypes from "prop-types";

const Card = ({ children }) => <div className="card">{children}</div>;

export default Card;

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
