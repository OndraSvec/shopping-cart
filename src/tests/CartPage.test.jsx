import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CartPage from "../components/CartPage";
import { CartContext } from "../CartContext";
import { fetchProduct } from "../utils/api";

describe("CartPage", () => {
  it("renders an empty-cart heading if there are no cart items", () => {
    render(
      <CartContext.Provider value={{ cartItems: [] }}>
        <CartPage />
      </CartContext.Provider>
    );
    const heading = screen.getByRole("heading", {
      name: "Your cart is empty.",
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders one cart item", async () => {
    const cartItem = await fetchProduct(39);
    render(
      <CartContext.Provider value={{ cartItems: [cartItem] }}>
        <CartPage />
      </CartContext.Provider>
    );
    const discardBtn = screen.getByRole("button", {
      name: "Discard Item",
    });
    expect(discardBtn).toBeInTheDocument();
  });
  it("renders more cart items", async () => {
    const cartItemOne = await fetchProduct(39);
    const cartItemTwo = await fetchProduct(55);
    const cartItemThree = await fetchProduct(74);
    render(
      <CartContext.Provider
        value={{ cartItems: [cartItemOne, cartItemTwo, cartItemThree] }}
      >
        <CartPage />
      </CartContext.Provider>
    );
    expect(
      screen.getAllByRole("button", {
        name: "Discard Item",
      }).length
    ).toBe(3);
  });
});
