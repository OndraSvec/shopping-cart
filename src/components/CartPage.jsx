import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <>{cartItems.length > 0 ? cartElements : <h2>Your cart is empty.</h2>}</>
  );
};

export default CartPage;
