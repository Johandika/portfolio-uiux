import React from "react";
import codingskill1 from "../../assets/images/codingskill1.png";
import codingskill2 from "../../assets/images/codingskill2.png";
import codingskill3 from "../../assets/images/codingskill3.png";
import codingskill4 from "../../assets/images/codingskill4.png";
import codingskill5 from "../../assets/images/codingskill5.png";
import codingskill6 from "../../assets/images/codingskill6.png";
import designskill1 from "../../assets/images/designskill1.png";
import designskill2 from "../../assets/images/designskill2.png";
import designskill3 from "../../assets/images/designskill3.png";
import designskill4 from "../../assets/images/designskill4.png";
import designskill5 from "../../assets/images/designskill5.png";
import designskill6 from "../../assets/images/designskill6.png";

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
            <a href="https://www.w3schools.com/html/" target="_blank">
              <img src={codingskill1} alt="HTML Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.w3schools.com/css/default.asp" target="_blank">
              <img src={codingskill2} alt="CSS Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.w3schools.com/js/default.asp" target="_blank">
              <img src={codingskill3} alt="JS Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://laravel.com/" target="_blank">
              <img src={codingskill4} alt="Laravel Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://react.dev/" target="_blank">
              <img src={codingskill5} alt="React Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={codingskill6} alt="Bootstrap Logo" />
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
            <a href="https://affinity.serif.com/en-gb/photo/" target="_blank">
              <img src={designskill1} alt="Affinity Photo Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://affinity.serif.com/en-us/" target="_blank">
              <img src={designskill2} alt="Affinity Designer Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.high-logic.com/font-editor/fontcreator" target="_blank">
              <img src={designskill3} alt="Font Creator Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://elementor.com/" target="_blank">
              <img src={designskill4} alt="Elementor Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank">
              <img src={designskill5} alt="Davinci Resolve Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.figma.com/" target="_blank">
              <img src={designskill6} alt="Figma Logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
