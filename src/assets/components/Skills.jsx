import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skill1 container-fluid text-center pt-4">
        <div className=" row">
          <div className="col-12">
            <h6>Coding Skills</h6>
          </div>
        </div>
        <div className="row-skill row 4 mt-2 mx-auto">
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill1.png"} alt="HTML Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill2.png"} alt="CSS Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill3.png"} alt="JS Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill4.png"} alt="Laravel Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill5.png"} alt="React Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/codingskill6.png"} alt="Bootstrap Logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="skill1 container-fluid text-center pt-4 my-4">
        <div className="row">
          <div className="col-12">
            <h6>Design Skills</h6>
          </div>
        </div>
        <div className="row-skill row 4 mt-2 mx-auto">
          <div className="col-md-2 col-4 mb-4 ">
            <a href="">
              <img src={"/src/assets/images/designskill1.png"} alt="Affinity Photo Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/designskill2.png"} alt="Affinity Designer Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/designskill3.png"} alt="Font Creator Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/designskill4.png"} alt="Elementor Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/designskill5.png"} alt="Davinci Resolve Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="">
              <img src={"/src/assets/images/designskill6.png"} alt="Figma Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}