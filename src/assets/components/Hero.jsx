import React from "react";
import * as Icon from "react-bootstrap-icons";
import Typed from "typed.js";

export default function Hero() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["UI/UX Designer", "Web Programmer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <section id="hero" className="h-auto">
      <div className="container text-white">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 order-2 order-md-1 my-5 mt-md-0">
            <h4>Hi, I'm Johandika Syahputra Lubis</h4>
            <span className="fw-bold display-4" style={{ whiteSpace: "pre" }} ref={el} />
            <p className="my-4">
              I'm from Indonesia and have a career in visual design for the last 3 years. I am
              currently developing career skills into website development and have worked on several
              projects as a fullstack. Design and Programming is my passion, and right now I am
              looking forward to collaborating with you!
            </p>
            <div>
              <a
                href="mailto:johanelyosse@gmail.com?subject=Collaborate%20With%20You&body=Hello%20Johandika"
                className="btn btn-danger px-4 py-3 me-md-3 me-2">
                Email Me
              </a>
              <a href="#" className="mx-md-3 mx-2">
                <Icon.Instagram color="#bfbfbf" size={25} />
              </a>
              <a href="#" className="mx-md-3 mx-2">
                <Icon.Whatsapp color="#bfbfbf" size={25} />
              </a>
              <a href="#" className="mx-md-3 mx-2 ">
                <Icon.Github color="#bfbfbf" size={25} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
            <img
              src="public\img\johandika edit web profile azonix (1)-min.png"
              alt=""
              className="w-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
