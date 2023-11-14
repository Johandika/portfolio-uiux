import React from "react";
import {nextjs,html,css,js,tailwind,nodejs,expressjs,redux,postgre,dbeaver,logopostman, reactjs,bootstrap, designskill1,designskill2,designskill3,designskill4,designskill5,designskill6} from "../images/index.js";


export default function Skills() {
  return (
    <section id="skills">
      <div className="skill1 container-fluid text-center pt-4">
        <div className="mb-4  row">
          <div className="col-12">
            <h6>Coding Skills</h6>
          </div>
        </div>
        <div className="row-skill row 4 mt-2 mx-auto">
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.w3schools.com/html/" target="_blank">
              <img src={html} alt="HTML Logo" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.w3schools.com/css/default.asp" target="_blank">
              <img src={css} alt="CSS Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://www.w3schools.com/js/default.asp" target="_blank">
              <img src={js} alt="JS Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4 ">
            <a href="https://laravel.com/" target="_blank">
              <img src={nextjs} alt="Next JS Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://react.dev/" target="_blank">
              <img src={reactjs} alt="React Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://react.dev/" target="_blank">
              <img src={tailwind} alt="Tailwind"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={bootstrap} alt="Bootstrap Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={nodejs} alt="Nodejs Logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={expressjs} alt="Expressjs" />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={redux} alt="Redux logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={dbeaver} alt="Dbeaver logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={postgre} alt="Postgre logo"  />
            </a>
          </div>
          <div className="col-md-2 col-4 mb-4">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={logopostman} alt="Postgre logo"  />
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
