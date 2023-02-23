import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Post from "../components/Post";
import Posts from "../components/Posts";
import Redirect from "../components/Redirect";

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />}>
        <Route path=":id" element={<Post />} />
      </Route>
      {/* <Route path="/post/:id" element={<Posts />} /> */}
      <Route path="/redirect" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}