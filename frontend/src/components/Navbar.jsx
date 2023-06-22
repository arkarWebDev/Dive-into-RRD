import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1>BLOG.io</h1>
      </Link>
      <div>
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/create-post"}>Create Post</NavLink>
        <NavLink to={"/auth?mode=login"}>Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
