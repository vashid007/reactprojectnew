import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 col-md-6">
              <img className="w-100 h-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-ap-south-1.amazonaws.com%2Fstatic.awfis.com%2Fwp-content%2Fuploads%2F2017%2F07%2F07184649%2FProjectManagement.jpg&f=1&nofb=1&ipt=ff70d86099fbc93341561528c9b3158f50b1df11647706a109074b0e001f1814" alt="" />
            </div>
            <div className="col-12 col-md-6">
              <form className="px-2">
            <div className="mb-3">
              <input
              className="form-control"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="mb-3">
              <input
              className="form-control"
                type="text"
                placeholder="Language"
              />
            </div>

            <div className="mb-3">
              <input
              className="form-control"
                type="text"
                placeholder="github"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="website"
              />
            </div>
            <div className="mb-3">
              <input
              className="form-control"
                type="textarea"
                placeholder="overview"
              />
            </div>
          </form>
            </div>
          </div>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProject;
