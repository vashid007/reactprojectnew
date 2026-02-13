import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="new " style={{ backgroundColor: "#789ad5" }}>
        <div
          className="container d-flex align-items-center"
          style={{ minHeight: "90vh" }}
        >
          <div className="row w-100">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1>Project Fair</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                eum, aliquam, assumenda facere sequi dolorem reiciendis harum
                repellat id architecto ex tempore laudantium vitae laborum
                perspiciatis odit vel vero officiis.
              </p>
              <div className="d-flex gap-3 mt-3">
                <button className="btn btn-primary">Get Start</button>
                <button className="btn btn-outline-secondary">
                  Manage project
                </button>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <img
                src="https://st2.depositphotos.com/3591429/11211/i/450/depositphotos_112113906-stock-photo-documents-paperwork-business-strategy-concept.jpg"
                alt=""
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="project-container pt-5 pb-5"
          style={{ minHeight: "50vh" }}
        >
          <h1 className="pb-3">Projects</h1>
          <div className="project-cards row g-4">
            <div className="col-md-4">
              <ProjectCard />
            </div>
            <div className="col-md-4">
              <ProjectCard />
            </div>
            <div className="col-md-4">
              <ProjectCard />
            </div>
          </div>
          <div className="text-center mt-5">
            <Link to={'/Allprojects'}>
              <button className="btn btn-primary btn-lg px-5">
                See All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
