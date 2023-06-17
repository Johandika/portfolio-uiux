import React from "react";

export default function Banner() {
  return (
    <section id="banner">
      <div className="container mb-5">
        <div className="row thumbnail align-items-center">
          <div className="col-md-8 py-md-5 mt-4 px-5 mb-2 text-center text-md-start">
            <h1 className="fw-bold display-4 text-white ">Let's Work Together</h1>
            <p className="grey">
              For business inquiry please send me email to{" "}
              <a href="mailto:johanelyosse@gmail.com?subject=Collaborate%20With%20You&body=Hello%20Johandika">
                <span className="text-white text-decoration-underline">johanelyosse@gmail.com</span>
              </a>
            </p>
          </div>
          <div className="col-md-4 text-center mt-2 mb-4">
            <a
              href="mailto:johanelyosse@gmail.com?subject=Collaborate%20With%20You&body=Hello%20Johandika"
              className="btn btn-danger px-4 py-3 me-md-3 me-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
