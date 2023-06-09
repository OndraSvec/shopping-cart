import { useLoaderData } from "react-router-dom";
import fetchProducts from "../utils/api";
import Card from "./Card";
import Carousel from "./Carousel";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const data = await fetchProducts();
  return data;
}

const ProductPage = () => {
  const products = useLoaderData();
  console.log(products);

  const productElements = products
    .sort((a, b) => b.price - a.price)
    .map((item) => (
      <Card key={item.id}>
        <p>Brand: {item.brand}</p>
        <p>Price: ${item.price}</p>
        <img src={item.images[0]} alt={item.title} />
      </Card>
    ));

  return (
    <div className="productPage">
      <Carousel>{productElements}</Carousel>
    </div>
  );
};

export default ProductPage;
