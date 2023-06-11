import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const AddToCartBtn = ({ product }) => {
  const { cartItems, addCartItem } = useContext(CartContext);
  const alreadyInCart = cartItems.find((item) => item.id === product.id);
  return (
    <button
      className="addToCart-btn"
      onClick={() => addCartItem(product)}
      disabled={alreadyInCart}
    >
      {alreadyInCart ? "Already in cart" : "Add to cart"}
    </button>
  );
};

export default AddToCartBtn;

AddToCartBtn.propTypes = {
  product: PropTypes.object,
};
