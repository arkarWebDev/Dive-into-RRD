import { redirect, useRouteLoaderData } from "react-router-dom";
import PostDetails from "../components/PostDetails";

const Details = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <>
      <PostDetails post={post} />
    </>
  );
};

export default Details;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);

  if (!response.ok) {
  } else {
    const data = await response.json();
    return data.post;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Error("");
  }

  return redirect("/");
};
