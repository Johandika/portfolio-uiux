import React from "react";
import "./project.css";
import { HashLink } from "react-router-hash-link";
import user from "../images/user.jpg";
import drone from "../../assets/images/drone.gif";
import Thumbnails4 from "../images/Thumbnails4.png";
import form2 from "../images/form2.jpg";
import discussion from "../images/discussion.jpg";
import sitemap from "../images/discussion.jpg";
import inspirations_cheetah from "../images/inspirations_cheetah.jpg";
import wireframe from "../images/wireframe.jpg";
import colors from "../images/colors.jpg";
import Mockup from "../images/Mockup.jpg";

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
              Cheetah, Religious social Foundation web design for fundraising.
            </h2>
          </div>
        </div>
        <div className="row mx-auto">
          <figure className="col-12 text-center d-flex flex-column gap-2">
            <img src={Thumbnails4} alt="Cheetah_Portfolio" className="img-thumbnail" />
            <figcaption className="figure-caption">
              <em>Cheetah Web Design</em>
            </figcaption>
          </figure>
        </div>
        <div className="row">
          <div className="col ">
            <p className="lh-lg">
              Client : Cheetah Erje <br />
              Year : 2022
            </p>
            <p className="lh-lg">
              This project is the first development of the Cheetah Erje landing page website.
              Cheetah is a special division of the Nadwah Islamiyah Foundation which was established
              specifically to collect funds from all muhsinin who wish to donate. The funds
              collected will be distributed to 4 activity clusters under the auspices of the Nadwah
              Islamiyah foundation, namely the Raudhatul Jannah Pekanbaru Mosque, the Baitussalam
              Mosque and Islamic Boarding School, the Tree of Merit, and the Tahfidz Akhawat House.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <figure className="col-lg-6 col-10 text-center d-flex flex-column gap-2 mx-auto my-4">
              <img src={drone} alt="GIF_Masjid_Raudhatul_Jannah" className="img-fluid" />
              <figcaption className="figure-caption">
                <em>
                  One of the clusters (out of 4 clusters) of the Nadwah Islamiyah Foundation, namely
                  the Raudhatul Jannah Islamic Center which was taken by drone
                </em>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Problem</h3>
            <p className="lh-lg">
              Cheetah has been running offline for several months and many new donors and potential
              donors have complained about the lack of information about Cheetah Erje and the steps
              for registering. At the same time, Cheetah Erje also wanted to create digital
              advertisements to introduce the "Autodebet Muhsinin" program through Facebook Ads and
              Instagram Ads, so a site was needed as a redirect for the Ads which will be broadcast
              in the near future. For this reason, the Cheetah team came to the conclusion of
              creating a Landing Page in blue tones that has complete information regarding the
              "Autodebit Muhsinin" program.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Users & Audiences</h3>
            <p className="lh-lg">
              As I mentioned above, the main purpose of this site is to provide information for
              donors and potential donors, and it is also used for digital advertising needs to
              introduce "Cheetah" and Erje Cheetah's "Autodebet Muhsinin" program. So users on this
              site are donors and potential donors.
            </p>
            <div className="row">
              <figure className="col-lg-5 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={user} alt="Users & Audiences" className="img-fluid" />
                <figcaption className="figure-caption">
                  <em>Users & Audiences</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Roles & Responsibilities</h3>
            <ol className="lh-lg ">
              <li>
                Project Manager. I discuss with clients, get donor feedback from them, make project
                summaries, make project timelines, etc.
              </li>
              <li>Designer. I am also the designer in this project.</li>
              <li>
                Developer. I am also a developer on this project. <br />{" "}
                <em> In other words, this project is a personal project that is done alone.</em>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold">Scope and Constraints</h3>
            <p className="lh-lg">
              This is a website development project where a website is created from scratch. The
              Cheetah Erje team does not have a draft of the website content structure, does not
              collect assets, and I create the structure and design from scratch, so it requires
              more time and more intense discussion regarding the content structure. I also have to
              wait to get the latest photo assets from the ongoing activity cluster. So I developed
              the website structure from the information I received during the discussion. Luckily I
              got illustrations from friends in the illustrator community in Indonesia. The section
              list that I designed is:
              <ol className="lh-lg ">
                <li>Above the fold section</li>
                <li>About us section</li>
                <li>Introduction to the program section</li>
                <li>Documentation section</li>
                <li>Form section</li>
              </ol>
            </p>
            <p className="lh-lg">
              And the features that I developed are :
              <ol className="lh-lg ">
                <li>
                  Send data from the form that has been filled in on the website to the Cheetah Erje
                  admin email for follow-up.
                </li>
                <li>Create an "Above the fold" video background.</li>
              </ol>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-black fw-bold mb-4">Process</h3>
            <h6 className=" fw-bold">Gathering requirements</h6>
            <p className="lh-lg">
              Since my client and I are in the same city, Pekanbaru, we decided to start the project
              by meeting at a Cheetah Erje office. Talk about the problem, objectives, scope and
              budget. These are the notes I took after the meeting :
              <ul>
                <li>They want a clean, uncluttered UI that is easy to read and navigate</li>
                <li>Blue is the primary color and white is the background</li>
                <li>
                  Key words of design inspiration: design donation, design foundation, autodebit.
                </li>
              </ul>
            </p>
            <div className="row">
              <figure className="col-lg-5 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={discussion} alt="Discussion_Cheetah" className="img-fluid" />
                <figcaption className="figure-caption">
                  <em>Meeting Cheetah Erje </em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <h6 className=" fw-bold">Sitemap</h6>
            <p className="lh-lg">
              The first step I took when we had a deal was to create a sitemap so that everyone
              could see the overall structure of the website's sections. This sitemap is very useful
              to see how big it is in scope and also as my guide when designing pages. When the
              sitemap was complete, I sent it to them for approval before moving on to the next
              step, the wireframe.
            </p>
            <div className="row">
              <figure className="col-lg-5 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={sitemap} alt="Cheetah_Portfolio" className="img-fluid" />
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
              I don't get inspiration from clients so all my inspiration is looking for myself for
              the look and feel. The inspiration I'm looking for is a website that uses a white
              background, is clean, and uses the main color blue. And this is the website I found.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={inspirations_cheetah} alt="inspirations-cheetah" className="img-fluid" />
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
              Wireframe Once the sitemap is approved, I move on to the wireframe process. In this
              wireframe, I'm using the content as well as the layout I'm proposing to present, so
              they know what the page is going to look like. I find this wireframe process very
              important so both me and the client can focus on the content first. They agreed with
              most of the above pages, with some minor revisions. The first is the hero section,
              initially I explained to put an image in the background in this section, but they want
              one of their activity clusters to be displayed in the form of a video as a background.
              They also wanted the induction section to use illustrations instead of pictures.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={wireframe} alt="wireframe" className="img-fluid" />
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
              Before heading to the mockup, I did some research on what colors I should use, based
              on what branding and company. Also I compared it with similar websites.
            </p>
            <div className="row">
              <figure className="col-md-4 col-8 text-center d-flex flex-column gap-2 mx-auto">
                <img src={colors} alt="colors" className="img-thumbnail" />
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
              After some feedback about the wireframes in the figma files and their approval, I
              moved on to the mockup phase. I ended up using most of the layouts from wireframes
              which means they agreed with my design proposal. Fill in the images, create some
              design elements to emphasize the site's meaning, add color, and enhance the layout.
            </p>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={Mockup} alt="Mockup" className=" img-fluid " />
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
              <img src={Thumbnails4} alt="Mockup" className=" img-fluid " />
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
              <li>
                Create a form feature that will send data directly to the Cheetah Erje admin email
              </li>
            </ol>
            <div className="row">
              <figure className="col-lg-8 col-md-8 col text-center d-flex flex-column gap-2 mx-auto">
                <img src={form2} alt="Form" className=" img-fluid " />
                <figcaption className="figure-caption">
                  <em>Form after developing</em>
                </figcaption>
              </figure>
            </div>
            This process takes 3 days of development until the site is ready to go and now you can
            see it in action.
          </p>
          <h6>
            <a
              href="https://muhsinin.erje.or.id/"
              target="_blank"
              className="text-decoration-none fw-semibold">
              muhsinin.erje.or.id
            </a>
          </h6>
        </div>
      </div>
    </section>
  );
}
