import { useLoaderData } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const data = await fetchProduct(params.id);
  return data;
}

const ProductDetail = () => {
  const product = useLoaderData();
  console.log(product);
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
      </RightPage>
    </div>
  );
};

export default ProductDetail;
