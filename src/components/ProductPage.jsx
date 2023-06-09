import { useLoaderData } from "react-router-dom";
import fetchProducts from "../utils/api";
import Card from "./Card";

export async function loader() {
  const data = await fetchProducts();
  return data;
}

const ProductPage = () => {
  const products = useLoaderData();
  console.log(products);

  const productElements = products.map((item) => (
    <Card key={item.id}>
      <img src={item.images[0]} alt={item.title} />
      <p>Brand: {item.brand}</p>
      <p>Price: ${item.price}</p>
    </Card>
  ));

  return <>{productElements}</>;
};

export default ProductPage;
