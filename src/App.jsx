import "./styles/App.css";
import { CartContextProvider } from "./CartContext";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import ProductPage, {
  loader as productPageLoader,
} from "./components/ProductPage";
import ProductDetail, {
  loader as productDetailLoader,
} from "./components/ProductDetail";
import CartPage from "./components/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="products"
        element={<ProductPage />}
        loader={productPageLoader}
      />
      <Route
        path="products/:id"
        element={<ProductDetail />}
        loader={productDetailLoader}
      />
      <Route path="cart" element={<CartPage />} />
    </Route>
  )
);

const App = () => (
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);

export default App;
