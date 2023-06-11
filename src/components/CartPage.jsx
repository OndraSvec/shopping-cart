import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <div className="cartPage">
      <LeftPage />
      <RightPage />
      {cartItems.length > 0 ? (
        cartElements
      ) : (
        <h2 className="cart-empty">Your cart is empty.</h2>
      )}
    </div>
  );
};

export default CartPage;
