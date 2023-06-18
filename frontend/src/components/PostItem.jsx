import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, date, image } = post;

  return (
    <section className="post">
      <Link to={`/post-details/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <Link to={`/post-details/${id}`}>
        <p className="title">{title}</p>
      </Link>
      <p className="date">Post at - {date}</p>
      <hr />
    </section>
  );
};

export default PostItem;
