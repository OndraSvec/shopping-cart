import { useLoaderData, Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import fetchProducts from "../utils/api";
import Card from "./Card";
import Carousel from "./Carousel";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

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
        <div className="item-info">
          <p>Brand: {item.brand}</p>
          <p>Price: ${item.price}</p>
        </div>
        <div className="item-image">
          <img src={item.images[0]} alt={item.title} loading="lazy" />
        </div>
        <div className="item-actions">
          <Link to={`/products/${item.id}`}>
            Details <BsArrowUpRight />
          </Link>
        </div>
      </Card>
    ));

  return (
    <div className="productPage">
      <LeftPage />
      <RightPage />
      <p>summer surf collection</p>
      <Carousel>{productElements}</Carousel>
    </div>
  );
};

export default ProductPage;
