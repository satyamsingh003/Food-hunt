import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="error-content">
          <h2>404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! The page you are looking for does not exist. If you think
            something is broken, report a problem and we will try to fix it.
          </p>
          <div className="btns">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Report a problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
