import React from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const isToken = useRouteLoaderData("root");

  return (
    <nav>
      <Link to={"/"}>
        <h1>BLOG.io</h1>
      </Link>
      <div>
        <NavLink to={"/"}>Posts</NavLink>
        {isToken && <NavLink to={"/create-post"}>Create Post</NavLink>}
        {!isToken && <NavLink to={"/auth?mode=login"}>Login</NavLink>}
        {isToken && <NavLink to={"/logout"}>Logout</NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;
