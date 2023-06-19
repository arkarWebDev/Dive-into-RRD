import React from "react";
import { Form, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const PostForm = () => {
  return (
    <section className="form-section">
      <div className="detail-header">
        <p>Create your post now.</p>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrowIcon" />
        </Link>
      </div>
      <Form method="post">
        <div className="form-input">
          <label htmlFor="form-title">Title</label>
          <input type="text" id="form-title" name="title" />
        </div>
        <div>
          <label htmlFor="form-image">Image Url</label>
          <input type="url" id="form-image" name="image" />
        </div>
        <div>
          <label htmlFor="form-date">Date</label>
          <input type="date" id="form-date" name="date" />
        </div>
        <div>
          <label htmlFor="form-description">Description</label>
          <textarea
            name="description"
            id="form-description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <button className="btn">Post</button>
      </Form>
    </section>
  );
};

export default PostForm;
