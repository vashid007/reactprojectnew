import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDeleteLeft, faGlobe, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function UserProjects() {
  return (
    <>
      <div className="row bg-primary p-3 mb-2">
        <div className="col-12 col-md-9">
          <h2>Travel website</h2>
        </div>
        <div className="col-12 col-md-3">
          <div className="d-flex justify-content-between ">
            <a href="" style={{ color: '#90d672' }}>
              <FontAwesomeIcon className="fa-2x" icon={faPenToSquare} />
            </a>
            <a href="" style={{ color: '#90d672' }}>
              <FontAwesomeIcon className="fa-2x" icon={faGlobe} />
            </a>
            <a href="" style={{ color: '#90d672' }}>
              <FontAwesomeIcon className="fa-2x" icon={faGithub} />
            </a>
            <a href="" style={{ color: '#90d672' }}>
              <FontAwesomeIcon className="fa-2x" icon={faTrash} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjects;
