import { useLoaderData } from "react-router-dom";
import { fetchProduct } from "../utils/api";

export async function loader({ params }) {
  const data = await fetchProduct(params.id);
  return data;
}

const ProductDetail = () => {
  const product = useLoaderData();
  console.log(product);
};

export default ProductDetail;
