import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import Create, { action as postCreateAction } from "./pages/Create";
import Details, { loader as detailsLoader } from "./pages/Details";
import Edit from "./pages/Edit";

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
          action: postCreateAction,
        },
        {
          path: "/post-details/:id",
          element: <Details />,
          loader: detailsLoader,
        },
        {
          path: "/edit-post/:id",
          element: <Edit />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
