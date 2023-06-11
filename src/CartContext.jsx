import { createContext, useState } from "react";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (item) => {
    setCartItems((prevState) => [...prevState, { ...item, cartQuantity: 1 }]);
  };
  const removeCartItem = (item) =>
    setCartItems((prevState) =>
      prevState.filter((cartItem) => cartItem.id !== item.id)
    );
  const increaseItemQuantity = (item) =>
    setCartItems((prevState) =>
      prevState.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
          : cartItem;
      })
    );
  const decreaseItemQuantity = (item) => {
    const targetItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (targetItem.cartQuantity > 1) {
      setCartItems((prevState) =>
        prevState.map((cartItem) => {
          return cartItem.id === item.id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
            : cartItem;
        })
      );
    } else {
      removeCartItem(item);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
