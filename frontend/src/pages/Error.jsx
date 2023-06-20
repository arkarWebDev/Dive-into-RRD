import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="errorPage">
      <div>
        <ExclamationTriangleIcon className="icon" />
        <p>Somethings went wrong!!</p>
        <Link to={"/"}>
          <p className="btn er-btn">go back Home</p>
        </Link>
      </div>
    </section>
  );
};

export default Error;
