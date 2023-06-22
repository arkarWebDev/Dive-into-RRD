import { Link, Form, useSearchParams } from "react-router-dom";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="form-section">
      <p>{isLogin ? "Login to your account" : "Create your new account"}</p>
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="btn login-btn">
          {isLogin ? "Login" : "Register"}
        </button>
      </Form>
      {isLogin ? (
        <p className="create-acc">
          Don't have an account?{" "}
          <Link to={"/auth?mode=register"}>Register here</Link>
        </p>
      ) : (
        <p className="create-acc">
          Already have an account?{" "}
          <Link to={"/auth?mode=login"}>Login here</Link>
        </p>
      )}
    </section>
  );
};

export default AuthForm;
