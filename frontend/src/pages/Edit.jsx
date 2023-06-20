import { useRouteLoaderData } from "react-router-dom";
import PostForm from "../components/PostForm";

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm
        header={"Edit your post now."}
        btnText={"Update Post"}
        oldPostData={post}
      />
    </>
  );
};

export default Edit;
