import { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalAmount = cartItems.reduce((acc, current) => {
    return (acc += current.price * current.cartQuantity);
  }, 0);

  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <div className="cartPage">
      <LeftPage />
      <RightPage />
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartElements}
          <div className="cart-total">
            <p>Total: {totalAmount}</p>
          </div>
        </div>
      ) : (
        <h2 className="cart-empty">Your cart is empty.</h2>
      )}
    </div>
  );
};

export default CartPage;
