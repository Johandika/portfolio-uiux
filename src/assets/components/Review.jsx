import React from "react";

export default function Review() {
  return (
    <section id="review">
      {/* text */}
      <div className="container my-md-5 my-sm-2 my-0 ">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white fw-bold text-center">What Clients Are Saying?</h2>
          </div>
        </div>
      </div>

      {/* bootstrap carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid py-5 my-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-12">
                    <div className="img">
                      <img src="public\img\kamal-ali.jpeg" alt="Kamal Ali" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mt-4 mt-md-0">
                    <h5 className="text-white fw-semibold mb-0">Kamal Ali</h5>
                    <small className="color-text-red mb-4">Founder, Ardour & Digita1</small>
                    <p className="color-text-grey mt-3">
                      I'm from Turkey and met Johan on Instagram, he does all my visual and print needs. He is also an
                      expert in wordpress and website creation. I always contact him for all my needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container-fluid py-5 my-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-12">
                    <div className="img">
                      <img src="public\img\joanna.jpeg" alt="Joanna Images" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mt-4 mt-md-0">
                    <h5 className="text-white fw-semibold mb-0">Joanna Lucille Roy</h5>
                    <small className="color-text-red mb-4">Project Manager, Garnet Inn & Suites</small>
                    <p className="color-text-grey mt-3">
                      We have known Johan for a long time, as I remember our first project was the Garnet Inn & Suites
                      project which was built in Orlando, America. Why did we choose Johan? because it is communicative,
                      dynamic, and can do everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid py-5 my-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-12">
                    <div className="img">
                      <img src="public\img\mehul-bhujwala.jpeg" alt="Mehul Bhujwala" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mt-4 mt-md-0">
                    <h5 className="text-white fw-semibold mb-0">Mehul Bhujwala</h5>
                    <small className="color-text-red mb-4">Founder, Slashtheory</small>
                    <p className="color-text-grey mt-3">
                      Johan is the best, I met Johan from the behance platform. I chose Johan for all kinds of our
                      business needs, starting from making logos, company cards, diagrams, websites and all other needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container-fluid py-5 my-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-4 col-12">
                    <div className="img">
                      <img src="public\img\demoiselle-elox.jpg" alt="Demoiselle Elox" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 mt-4 mt-md-0">
                    <h5 className="text-white fw-semibold mb-0">Demoiselle Elox</h5>
                    <small className="color-text-red mb-4">Owner, Paparazi Union</small>
                    <p className="color-text-grey mt-3">
                      Project Caribbean was our initial project, Johan did everything himself on a tight schedule, he
                      made awesome banners, logos and posters. Johan is amazing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
