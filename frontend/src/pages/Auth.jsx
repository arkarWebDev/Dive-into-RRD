import React from "react";
import AuthForm from "../components/AuthForm";
import { redirect } from "react-router-dom";

const Auth = () => {
  return <AuthForm />;
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw new Error("");
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Error("");
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expDate = new Date();
  expDate.setHours(expDate.getHours() + 1);
  localStorage.setItem("exp", expDate.toISOString());

  return redirect("/");
};
