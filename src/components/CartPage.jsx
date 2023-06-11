import { useContext } from "react";
import { CartContext } from "../CartContext";

const CartPage = () => {
  const {
    cartItems,
    removeCartItem,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useContext(CartContext);
  console.log(cartItems);
  return <h2>CartPage</h2>;
};

export default CartPage;
