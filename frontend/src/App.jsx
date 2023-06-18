import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import Create from "./pages/Create";
import Details, { loader as detailsLoader } from "./pages/Details";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
        },
        {
          path: "/post-details/:id",
          element: <Details />,
          loader: detailsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
