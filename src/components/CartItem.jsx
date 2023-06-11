import PropTypes from "prop-types";
import CartItemQuantity from "./CartItemQuantity";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../CartContext";

const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={item.images[0]} alt={item.title} />
      </div>
      <div className="cart-item-right">
        <p className="cart-item-total">
          Item total: ${item.cartQuantity * item.price}
        </p>
        <CartItemQuantity item={item} />
        <button
          className="cart-item-remove"
          onClick={() => removeCartItem(item)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.object,
};
