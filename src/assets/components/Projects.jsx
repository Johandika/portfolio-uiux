import React from "react";
import { Link } from "react-router-dom";
import selected_project_1 from "../../assets/images/selected_project_1.jpg";
import selected_project_2 from "../../assets/images/selected_project_2.jpg";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white fw-bold ">Selected Projects</h2>
          </div>
        </div>
        <div className="row project">
          <div className="col-auto d-flex justify-content-center mx-auto mx-md-0">
            <Link to="/slashtheory" className="thumbnail p-md-4 p-sm-3 p-2 ">
              <img src={selected_project_1} alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="row project">
          <div className="col-auto d-flex justify-content-center mx-auto mx-md-0">
            <Link to="/cheetah" className="thumbnail p-md-4 p-sm-3 p-2 ">
              <img src={selected_project_2} alt="" className="img-fluid" />
            </Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <a
              href="https://drive.google.com/file/d/1Wxj5djjwiyWghw4RaXnIQZZ6YpqOAxWB/view?usp=sharing"
              className="btn btn-danger px-4 py-3 ">
              Get Showcase Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
