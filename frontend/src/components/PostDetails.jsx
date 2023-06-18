import React from "react";

const PostDetails = ({ post }) => {
  const { description, image, title, date } = post;

  return (
    <section className="details">
      <p className="detail-title">{title}</p>
      <p className="date">{date}</p>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      <hr />
    </section>
  );
};

export default PostDetails;
