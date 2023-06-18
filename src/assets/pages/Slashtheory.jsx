import React from "react";
import "./project.css";
import { HashLink } from "react-router-hash-link";
import Thumbnails2 from "../images/Thumbnails2.png";
import chatslashtheory from "../images/chatslashtheory.jpg";
import Slashtheory_sketch from "../images/Slashtheory_sketch.jpg";
import slashtheory_logo_white_background from "../images/slashtheory_logo_white_background.jpg";
import slashtheory_logo_navy_background from "../images/slashtheory_logo_navy_background.jpg";
import mindmap_slashtheory from "../images/mindmap_slashtheory.jpg";
import inspiration_slashtheory from "../images/inspiration_slashtheory.jpg";
import colors_slashtheory from "../images/colors_slashtheory.jpg";
import mockup_slashtheory from "../images/mockup_slashtheory.jpg";

export default function Slashtheory() {
  return (
    <section
      id="background-projects"
      className="container-lg container-fluid bg-white my-lg-5 my-0  p-lg-5 p-2">
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
            <h2 className="text-black fw-bold  ">
              Slashtheory, web design technology services from India.
            </h2>
          </div>
        </div>
        <div className="row mx-auto">
          <figure className="col-12 text-center d-flex flex-column gap-2">
            <img src={Thumbnails2} alt="Cheetah_Portfolio" className="img-thumbnail" />
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
              This project is the first development of the Slashtheory website. Slashtheory is an
              Indian company engaged in the digital design and IT industry. This company provides
              several services such as UI/UX design, full stack web application development, as well
              as iOS and Android application development. I got this project through the behance
              platform, then the client and I made more intense contact via WhatsApp. Initially the
              client asked me to design logos, business cards and infographics for his company, in
              the end the client also asked for UI/UX design services and development with
              WordPress.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <figure className="col-lg-12 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
              <img
                src={chatslashtheory}
                alt="slashtheory chat with clients"
                className="img-fluid"
              />
              <figcaption className="figure-caption">
                <em>
                  Some of the initial conversations with clients on behance and then continued to
                  WhatsApp.
                </em>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Problem</h3>
            <p className="lh-lg">
              Slastheory is a new venture in the software development industry. They need a
              professional package service to create logos, create business cards, infographics, to
              UI/UX and development. While they are taking care of all the legality of new companies
              in India, they hope that this task can be done properly by professionals so as to save
              time. They were looking for professional services on behance until they finally made
              contact with my account.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Users & Audiences</h3>
            <p className="lh-lg">
              The main purpose of this site is to provide company profile information and services
              offered by these companies, namely in the form of software design and development. So
              that users on this site are clients and prospective clients who just want to know
              information related to Slashtheory and the services it offers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Roles & Responsibilities</h3>
            <ol className="lh-lg ">
              <li>
                Project Manager. I discuss with clients, get feedback from them, create project
                summaries, create project timelines, etc.
              </li>
              <li>
                Designer. I am also the designer for this project, designing logos, business cards,
                infographics, and UI/UX.
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
              This is a web project created for the Slashtheory company so all processes need to be
              built from scratch sketches. The most important thing is that the clients already know
              about the structure of the web content, which they write and share with me via
              WhatsApp. So I developed the website structure from the information I received during
              the discussions. List of designs that I made during the project:
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
              As for the development process, I created a message sending feature directly to the
              Slashtheory admin email which can be accessed on the What we do page.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold mb-4">Process</h3>
            <h6 className=" fw-bold">Gathering requirements</h6>
            <p className="lh-lg">
              During the project, we did not even hold a video call to discuss needs, this was due
              to the busyness of the clients. All information was obtained through the WhatsApp
              group which contains 3 people, namely me and 2 clients. Clients explain the needs,
              flow and concept of web apps, and send asset links that I can access. Some of the
              notes obtained from the results of discussions in the WhatsApp group are:
              <ul>
                <li>
                  Clients request a logo design with a logotype type with the brand colors magenta
                  and cyan.
                </li>
                <li>Clients request a dark color tone for the background.</li>
                <li>The client requested a simple business card, with a dark background.</li>
                <li>
                  The client requests to use a typewriter font as the heading in the hero section.
                </li>
                <li>
                  The client requests that the website be developed with Elementor and a message
                  sending feature is made to the admin email on the contact page.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Logo Design Process</h6>
            <p className="lh-lg">
              The first stage in working on this project is the logo design stage. After I picked up
              a few discussion points from the WhatsApp group with the client, I concluded that the
              client wanted a logo in the form of a logotype with cyan and magenta tones. From the
              several concepts that I made, clients agreed on a futuristic logotype concept, with a
              slash on the letter "l" logo and a negative space slash on the letter "o" logo as well
              as a logotype style with firm angles and a truncated "s" style that strengthens
              futuristic impression. In this logotype concept, I also applied two color tones,
              namely magenta and cyan, to the two truncated letters "s". The sketch and final result
              of the agreed logo can be seen in the image below.
            </p>
          </div>
          <div className="row">
            <div className="col">
              <figure className="col-lg-8 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
                <div className=" d-flex gap-0">
                  <img
                    src={Slashtheory_sketch}
                    alt="slashtheory chat with clients"
                    className="img-fluid"
                  />
                </div>
                <figcaption className="figure-caption">
                  <em>
                    Some of the initial conversations with clients on behance and then continued to
                    WhatsApp.
                  </em>
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
                      src={slashtheory_logo_white_background}
                      alt="slashtheory chat with clients"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={slashtheory_logo_navy_background}
                      alt="slashtheory chat with clients"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <figcaption className="figure-caption">
                  <em>
                    Some of the initial conversations with clients on behance and then continued to
                    WhatsApp.
                  </em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <h6 className=" fw-bold">Sitemap</h6>
            <p className="lh-lg">
              The initial action I took upon finalizing the deal was to develop a sitemap, providing
              a comprehensive overview of the website's sections. This sitemap serves as a valuable
              tool for assessing the project's scope and serves as my reference point during the
              page design phase. Once the sitemap was completed, I shared it with them for their
              approval before proceeding to the subsequent step, which involves creating wireframes.
            </p>
            <div className="row">
              <figure className="col-lg-10 col-md-8 text-center d-flex flex-column gap-2 mx-auto">
                <img src={mindmap_slashtheory} alt="Mindmap-Slashtheory" className="img-fluid" />
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
              I have discovered an inspiring design that perfectly aligns with my vision. I desire a
              website that exudes elegance through a dark color scheme, while maintaining a polished
              and minimalistic appearance. I would like to share with you the website that captured
              my interest.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img
                  src={inspiration_slashtheory}
                  alt="inspirations-slashtheory"
                  className="img-fluid"
                />
                <figcaption className="figure-caption">
                  <em>Inspirations Website</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 className=" fw-bold">Define Design Colors</h6>
            <p className="lh-lg">
              I skipped the wireframe phase and headed straight for the high fidelity mockup phase
              for some reason from the client. Before heading to the mockup, I did some research on
              what colors I should use, based on the company's branding. Also I compared it with
              similar sites.
            </p>
            <div className="row">
              <figure className="col-md-4 col-8 text-center d-flex flex-column gap-2 mx-auto">
                <img src={colors_slashtheory} alt="colors" className="img-thumbnail" />
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
              In making this mockup phase, I didn't get many revisions, only a few layout and asset
              revisions. After getting approval, I did development on the design I had made using
              wordpress.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={mockup_slashtheory} alt="Mockup-Slashtheory" className=" img-fluid " />
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
            With some feedback and revisions, the design was finally completed. Then the next stage
            is the development process.
          </p>
          <div className="row">
            <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
              <img src={Thumbnails2} alt="Mockup" className=" img-fluid " />
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
            I did development using wordpress and elementor within a week. You can see it directly
            on the link below:
          </p>
          <h6>
            <a
              href="https://slashtheory.com/"
              target="_blank"
              className="text-decoration-none fw-semibold">
              slashtheory.com
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}
