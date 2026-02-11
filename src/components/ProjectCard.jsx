import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "40%" }}>
        <Card.Img
          onClick={handleShow}
          cursor-pointer
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F341%2F827%2Fnon_2x%2Flarge-lonely-tree-with-green-natural-leaves-on-the-field-free-photo.jpg&f=1&nofb=1&ipt=685cee7e07abe1ef3deca7a6a8313b20d87da9dcd86173b9d2f237673a113f8c"
        />
        <Card.Body className="d-flex align-items-center justify-content-between">
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-lg-5 col-md-6 order-md-1">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F030%2F341%2F827%2Fnon_2x%2Flarge-lonely-tree-with-green-natural-leaves-on-the-field-free-photo.jpg&f=1&nofb=1&ipt=685cee7e07abe1ef3deca7a6a8313b20d87da9dcd86173b9d2f237673a113f8c"
                className="img-fluid rounded"
                alt="Project image"
              />
            </div>
            <div className="col-lg-7 col-md-6 order-md-2 order-first">
              <div className="mb-3">
                <h3>Description</h3>
                <p>project description here</p>
              </div>
              <div>
                <h3>Technology</h3>
                <p>HTML, CSS, JS</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <FontAwesomeIcon className="fa-2x" icon={faSquareGithub} />
          <FontAwesomeIcon className="fa-2x" icon={faSquareLinkedin} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
