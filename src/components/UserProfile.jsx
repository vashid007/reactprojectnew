import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";


function UserProfile() {

  const [open, setOpen] = useState(false);

  return (
    <>
      
        <div className="profile-card">
          <div className="profile-header d-flex justify-content-between" >
            <h1 className="profile-name">Abdul Vashid</h1>
            <div>
              <button className="btn btn-primary px-3 py-2" onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}>
                { open?<FontAwesomeIcon icon={faArrowUp} />
                :<FontAwesomeIcon icon={faArrowDown} />}
              </button>
            </div>
          </div>
          <Collapse in={open}>
            <div className="profile-details d-flex flex-column justify-content-center align-items-center" id="example-collapse-text">
              <img
                className="profile-image w-25"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F018%2F765%2F757%2Foriginal%2Fuser-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg&f=1&nofb=1&ipt=fc2a8d955e23d951e92354666c3e39389a9f84fe2916599c506b3fa766783236"
                alt=""
              />
  
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Github"
                  />
                </div>
  
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LinkedIn"
                  />
                </div>
  
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </Collapse>
        </div>
      
    </>
  );
}

export default UserProfile;
