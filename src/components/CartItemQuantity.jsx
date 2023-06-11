import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartItemQuantity = ({ item }) => {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity } =
    useContext(CartContext);
  const targetItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="cartItemQuantity">
      <p>Quantity:</p>
      <div className="cartItemQuantity-buttons">
        <button
          className="decreaseQuantity"
          onClick={() => decreaseItemQuantity(item)}
        >
          -
        </button>
        <p>{targetItem.cartQuantity}</p>
        <button
          className="increaseQuantity"
          onClick={() => increaseItemQuantity(item)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemQuantity;

CartItemQuantity.propTypes = {
  item: PropTypes.object,
};
