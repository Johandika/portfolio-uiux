import React from "react";
import "./project.css";
import { HashLink } from "react-router-hash-link";

export default function Slashtheory() {
  return (
    <section id="background-projects" className="container-lg container-fluid bg-white my-lg-5 my-0  p-lg-5 p-2">
      <div className="container d-grid gap-4">
        <div className="row">
          <div className="col">
            <HashLink to="/#projects" className="text-decoration-none color-text-grey" smooth>
              <small>&#129120; Lihat semua proyek</small>
            </HashLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="text-black fw-bold  ">Cheetah, Religious social Foundation web design for fundraising.</h2>
          </div>
        </div>
        <div className="row mx-auto">
          <figure className="col-12 text-center d-flex flex-column gap-2">
            <img src="public\img\Thumbnails2.png" alt="Cheetah_Portfolio" className="img-thumbnail" />
            <figcaption className="figure-caption">
              <em>Cheetah Web Design</em>
            </figcaption>
          </figure>
        </div>
        <div className="row">
          <div className="col ">
            <p className="lh-lg">
              Client : Slashtheory <br />
              Year : 2020
            </p>
            <p className="lh-lg">
              This project is the first development of the Slashtheory website. Slashtheory is an Indian company engaged
              in the digital design and IT industry. This company provides several services such as UI/UX design, full
              stack web application development, as well as iOS and Android application development. I got this project
              through the behance platform, then the client and I made more intense contact via WhatsApp. Initially the
              client asked me to design logos, business cards and infographics for his company, in the end the client
              also asked for UI/UX design services and development with WordPress.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <figure className="col-lg-12 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
              <img src="public\img\chatslashtheory.jpg" alt="slashtheory chat with clients" className="img-fluid" />
              <figcaption className="figure-caption">
                <em>Some of the initial conversations with clients on behance and then continued to WhatsApp.</em>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Problem</h3>
            <p className="lh-lg">
              Slastheory is a new venture in the software development industry. They need a professional package service
              to create logos, create business cards, infographics, to UI/UX and development. While they are taking care
              of all the legality of new companies in India, they hope that this task can be done properly by
              professionals so as to save time. They were looking for professional services on behance until they
              finally made contact with my account.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Users & Audiences</h3>
            <p className="lh-lg">
              The main purpose of this site is to provide company profile information and services offered by these
              companies, namely in the form of software design and development. So that users on this site are clients
              and prospective clients who just want to know information related to Slashtheory and the services it
              offers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Roles & Responsibilities</h3>
            <ol className="lh-lg ">
              <li>
                Project Manager. I discuss with clients, get feedback from them, create project summaries, create
                project timelines, etc.
              </li>
              <li>
                Designer. I am also the designer for this project, designing logos, business cards, infographics, and
                UI/UX.
              </li>
              <li>
                Developer. I am also a developer on this project. <br />
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Scope and Constraints</h3>
            <p className="lh-lg">
              This is a web project created for the Slashtheory company so all processes need to be built from scratch
              sketches. The most important thing is that the clients already know about the structure of the web
              content, which they write and share with me via WhatsApp. So I developed the website structure from the
              information I received during the discussions. List of designs that I made during the project:
              <ol className="lh-lg ">
                <li>Logo design</li>
                <li>Business cards</li>
                <li>Infographics</li>
                <li>UI/UX</li>
              </ol>
            </p>
            <p className="lh-lg">
              There is a list of pages for the UI/UX that I design, namely:
              <ol className="lh-lg ">
                <li>Home page</li>
                <li>What we do page</li>
                <li>Contact page</li>
              </ol>
            </p>
            <p className="lh-lg">
              As for the development process, I created a message sending feature directly to the Slashtheory admin
              email which can be accessed on the What we do page.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold mb-4">Process</h3>
            <h6 className=" fw-bold">Gathering requirements</h6>
            <p className="lh-lg">
              During the project, we did not even hold a video call to discuss needs, this was due to the busyness of
              the clients. All information was obtained through the WhatsApp group which contains 3 people, namely me
              and 2 clients. Clients explain the needs, flow and concept of web apps, and send asset links that I can
              access. Some of the notes obtained from the results of discussions in the WhatsApp group are:
              <ul>
                <li>Clients request a logo design with a logotype type with the brand colors magenta and cyan.</li>
                <li>Clients request a dark color tone for the background.</li>
                <li>The client requested a simple business card, with a dark background.</li>
                <li>The client requests to use a typewriter font as the heading in the hero section.</li>
                <li>
                  The client requests that the website be developed with Elementor and a message sending feature is made
                  to the admin email on the contact page.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Logo Design Process</h6>
            <p className="lh-lg">
              The first stage in working on this project is the logo design stage. After I picked up a few discussion
              points from the WhatsApp group with the client, I concluded that the client wanted a logo in the form of a
              logotype with cyan and magenta tones. From the several concepts that I made, clients agreed on a
              futuristic logotype concept, with a slash on the letter "l" logo and a negative space slash on the letter
              "o" logo as well as a logotype style with firm angles and a truncated "s" style that strengthens
              futuristic impression. In this logotype concept, I also applied two color tones, namely magenta and cyan,
              to the two truncated letters "s". The sketch and final result of the agreed logo can be seen in the image
              below.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <figure className="col-lg-8 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
                <div className=" d-flex gap-0">
                  <img
                    src="public\img\Slashtheory sketch.jpg"
                    alt="slashtheory chat with clients"
                    className="img-fluid"
                  />
                </div>
                <figcaption className="figure-caption">
                  <em>Some of the initial conversations with clients on behance and then continued to WhatsApp.</em>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <figure className="col-lg-12 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
                <div className=" d-flex gap-0">
                  <div className="col-6">
                    <img
                      src="public\img\slashtheory logo (white background).jpg"
                      alt="slashtheory chat with clients"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="public\img\slashtheory logo (navy background).jpg"
                      alt="slashtheory chat with clients"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <figcaption className="figure-caption">
                  <em>Some of the initial conversations with clients on behance and then continued to WhatsApp.</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <h6 className=" fw-bold">Sitemap</h6>
            <p className="lh-lg">
              Sitemap The first step I took when we had a deal was to create a sitemap so that everyone could see the
              overall structure of the website's sections. This sitemap is very useful to see how big it is in scope and
              also as my guide when designing pages. When the sitemap was complete, I sent it to them for approval
              before moving on to the next step, the wireframe.
            </p>
            <div className="row">
              <figure className="col-lg-5 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\sitemap.jpg" alt="Cheetah_Portfolio" className="img-fluid" />
                <figcaption className="figure-caption">
                  <em>Sitemap</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Website for Inspiration</h6>
            <p className="lh-lg">
              I don't get inspiration from clients so all my inspiration is looking for myself for the look and feel.
              The inspiration I'm looking for is a website that uses a white background, is clean, and uses the main
              color blue. And this is the website I found.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\inspirations-cheetah.jpg" alt="inspirations-cheetah" className="img-fluid" />
                <figcaption className="figure-caption">
                  <em>Inspirations Website</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Wireframe</h6>
            <p className="lh-lg">
              Wireframe Once the sitemap is approved, I move on to the wireframe process. In this wireframe, I'm using
              the content as well as the layout I'm proposing to present, so they know what the page is going to look
              like. I find this wireframe process very important so both me and the client can focus on the content
              first. They agreed with most of the above pages, with some minor revisions. The first is the hero section,
              initially I explained to put an image in the background in this section, but they want one of their
              activity clusters to be displayed in the form of a video as a background. They also wanted the induction
              section to use illustrations instead of pictures.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\wireframe.jpg" alt="wireframe" className="img-fluid" />
                <figcaption className="figure-caption">
                  <em>Wireframe</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Define Design Colors</h6>
            <p className="lh-lg">
              Before heading to the mockup, I did some research on what colors I should use, based on what branding and
              company. Also I compared it with similar websites.
            </p>
            <div className="row">
              <figure className="col-md-4 col-8 text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\colors.jpg" alt="colors" className="img-thumbnail" />
                <figcaption className="figure-caption">
                  <em>Colors</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Mockup</h6>
            <p className="lh-lg">
              After some feedback about the wireframes in the figma files and their approval, I moved on to the mockup
              phase. I ended up using most of the layouts from wireframes which means they agreed with my design
              proposal. Fill in the images, create some design elements to emphasize the site's meaning, add color, and
              enhance the layout.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\Mockup.jpg" alt="Mockup" className=" img-fluid " />
                <figcaption className="figure-caption">
                  <em>Mockup</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="text-black fw-bold">Results</h3>
          <p className="lh-lg">
            With some feedback and revisions, the final design was finally completed. Then the next stage is the
            development process.
          </p>
          <div className="row">
            <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
              <img src="public\img\Thumbnails4.png" alt="Mockup" className=" img-fluid " />
              <figcaption className="figure-caption">
                <em>Mockup</em>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="text-black fw-bold">Development</h3>
          <p className="lh-lg">
            There are several features that are worked on at this stage, namely:
            <ol className="lh-lg ">
              <li>Create a video background in the hero section.</li>
              <li>Create a form feature that will send data directly to the Cheetah Erje admin email</li>
            </ol>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src="public\img\form2.jpg" alt="Form" className=" img-fluid " />
                <figcaption className="figure-caption">
                  <em>Form after developing</em>
                </figcaption>
              </figure>
            </div>
            This process takes 3 days of development until the site is ready to go and now you can see it in action.
          </p>
          <h6>
            <a href="https://muhsinin.erje.or.id/" target="_blank" className="text-decoration-none fw-semibold">
              muhsinin.erje.or.id
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}
