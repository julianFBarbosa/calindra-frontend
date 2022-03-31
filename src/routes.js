import { Route, Routes as RouteList } from "react-router-dom";
import { PostList } from "./components/PostList";

export const Routes = () => (
  <RouteList>
    <Route path="/" element={<PostList />} />
  </RouteList>
);
