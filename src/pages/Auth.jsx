import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <>
      <div className="loginpage bg-primary py-4 py-md-5">
        <div className="container">
          <h3 className="mb-5 text-light">
            <Link to="/" className="text-light text-decoration-none">
              Back to home
            </Link>
          </h3>
          <div className="row m-2 p-4 bg-white p-3 p-md-5 g-5 align-items-center rounded-4">
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fanimation%2F2023%2F06%2F13%2F15%2F12%2F15-12-30-710_512.gif&f=1&nofb=1&ipt=7bc7533e99279bc33abdab9dc63ce7c1adba42683b288631e6140363772568fd"
                className="img-fluid"
                style={{ maxWidth: "320px" }}
                alt=""
              />
            </div>

            <div className="col-12 col-md-7">
              <h1>Project Vashid</h1>
              <h4 className="text-primary">Log in to your Account</h4>
              <h4 className="text-primary">Register your account</h4>

              <form className="d-flex flex-column gap-3">
                <div className="mb-1">
                  <label htmlFor="username" className="form-label">
                    User name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your user name"
                    aria-label="User name"
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-1">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <button type="submit" className="btn btn-secondary">
                    Log In
                  </button>

                  <h6>Dont have an account <span className="text-primary">REGISTER</span></h6>
                </div>

                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <button type="submit" className="btn btn-secondary">
                    Register
                  </button>
                  <h6>Already have an account <span className="text-primary">LOG IN </span></h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
