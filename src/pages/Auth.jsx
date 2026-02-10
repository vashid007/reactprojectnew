import React from "react";

function Auth() {
  return (
    <>
      <div>
        <div className="container">
          <h3>Back to home</h3>
          <div className="row bg-primary d-flex ">
            <div className="col">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fanimation%2F2023%2F06%2F13%2F15%2F12%2F15-12-30-710_512.gif&f=1&nofb=1&ipt=7bc7533e99279bc33abdab9dc63ce7c1adba42683b288631e6140363772568fd" className="w-50" alt=""
              />
            </div>

            <div className="col">
              <h1>Project Vashid</h1>
              <h1>Log in to your Account</h1>
              <h1>Register your account</h1>

              <form className="d-flex flex-column gap-3">
                <div className="mb-3">
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

                <div className="mb-3">
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

                <div className="mb-3">
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

                <div>
                  <button type="submit" className="btn btn-secondary">
                    Log In
                  </button>

                  <h5>Dont have a account REGISTER</h5>
                </div>

                <div>
                  <button type="submit" className="btn btn-secondary">
                    Register
                  </button>
                  <h5>Already have a account LOG IN</h5>
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
