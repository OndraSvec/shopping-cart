import { useLoaderData } from "react-router-dom";
import fetchProducts from "../utils/api";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const ProductPage = () => {
  const products = useLoaderData();
  console.log(products);

  return <h2>hello</h2>;
};

export default ProductPage;
