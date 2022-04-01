import { Route, Routes as RouteList } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";

export const Routes = () => (
  <RouteList>
    <Route path="/" element={<Home />} />
    <Route path="/produtos/:name" element={<ProductList />} />
  </RouteList>
);
