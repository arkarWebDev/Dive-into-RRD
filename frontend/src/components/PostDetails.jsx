import React from "react";
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

const PostDetails = ({ post }) => {
  const isToken = useRouteLoaderData("root");
  const { description, image, title, date } = post;
  const submit = useSubmit();

  const postDeleteHandler = () => {
    const comfirmStatus = window.confirm(
      "Are you sure want to delete this post ?"
    );

    if (comfirmStatus) {
      submit(null, { method: "DELETE" });
    }
  };

  return (
    <section className="details">
      <div className="detail-header">
        <div>
          <p className="detail-title">{title}</p>
          <p className="date">
            <CalendarDaysIcon className="clockIcon" /> <span>{date}</span>
          </p>
        </div>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowIcon" />
        </Link>
      </div>
      <img src={image} alt={title} />
      <p className="description">{description}</p>
      {isToken && (
        <div className="detail-footer">
          <Link to={`edit-post`}>
            <p className="btn sm">Edit</p>
          </Link>
          <p className="btn sm" onClick={postDeleteHandler}>
            Delete
          </p>
        </div>
      )}
      <hr />
    </section>
  );
};

export default PostDetails;
