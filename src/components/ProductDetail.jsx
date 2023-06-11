import { useLoaderData } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";
import { useContext } from "react";
import { CartContext } from "../CartContext";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const data = await fetchProduct(params.id);
  return data;
}

const ProductDetail = () => {
  const product = useLoaderData();
  const { cartItems, addCartItem } = useContext(CartContext);
  const alreadyInCart = cartItems.find((item) => item.id === product.id);
  return (
    <div className="productDetail">
      <LeftPage>
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <p>
          {product.rating > 4.5 ? <BsStarFill /> : <BsStarHalf />}
          {product.rating}
        </p>
        <p>{product.description}</p>
      </LeftPage>
      <RightPage>
        <div className="images">
          <img src={product.images[0]} alt={product.title} />
          <img src={product.images[1]} alt={product.title} />
          <img src={product.images[2]} alt={product.title} />
        </div>
        <button
          className="addToCart-btn"
          onClick={() => addCartItem(product)}
          disabled={alreadyInCart}
        >
          {alreadyInCart ? "Already in cart" : "Add to cart"}
        </button>
      </RightPage>
    </div>
  );
};

export default ProductDetail;
