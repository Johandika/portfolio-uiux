import React from "react";
import * as Icon from "react-bootstrap-icons";
import Typed from "typed.js";
import johandikaa from "../../assets/images/johandikaa.png";

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
                href="https://drive.google.com/file/d/1Wxj5djjwiyWghw4RaXnIQZZ6YpqOAxWB/view?usp=drive_link"
                target="_blank"
                className="btn btn-danger px-4 py-3 me-md-3 me-2">
                Get Showcase
              </a>
              <a
                href="https://drive.google.com/file/d/1EyHA4RoA0VRr6BnF9MhfCTtcnTzW-pem/view?usp=sharing"
                target="_blank"
                className="btn border-2 border-danger px-4 py-3 me-md-3 me-2 ">
                Get Resume
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/azonix_designer/"
                target="_blank"
                className="ms-md-0 me-md-3 mx-2 ">
                <Icon.Instagram color="#bfbfbf" size={25} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6282370323310&text=Hallo+Johandika%2C+I+visit+from+your+website&type=phone_number&app_absent=0"
                target="_blank"
                className="mx-md-3 mx-2 ">
                <Icon.Whatsapp color="#bfbfbf" size={25} />
              </a>
              <a href="https://github.com/Johandika" target="_blank" className="mx-md-3 mx-2 ">
                <Icon.Github color="#bfbfbf" size={25} />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 d-flex justify-content-center">
            <img src={johandikaa} alt="" className="w-75" />
          </div>
        </div>
      </div>
    </section>
  );
}
