import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function HireMe() {
  return (
    <div id="hireme" className="container text-center text-white mx-auto">
      <div className="row mb-lg-4 mt-4 mt-md-0">
        <div className="col-12 mb-2 mt-4 mt-md-0 mb-md-4">
          <h2 className="text-white fw-bold">Why Hire Me?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-3">
          <div className="border-icons d-flex align-items-center justify-content-center mx-auto mb-3">
            <div className="background-icons d-flex align-items-center justify-content-center">
              <Icon.ChatQuoteFill color="#FFFFFF" size={70} />
            </div>
          </div>
          <h4>Communicative</h4>
          <p>I communicate what I struggle to make all crystal clear. I can communicate my ideas well.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-3">
          <div className="border-icons d-flex align-items-center justify-content-center mx-auto mb-3">
            <div className="background-icons d-flex align-items-center justify-content-center">
              <Icon.PeopleFill color="#FFFFFF" size={70} />
            </div>
          </div>
          <h4>Collaborative​</h4>
          <p>
            I can work within a team, collaborate well with developers because I’m fullstack myself, and I love
            feedbacks.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-3">
          <div className="border-icons d-flex align-items-center justify-content-center mx-auto mb-3">
            <div className="background-icons d-flex align-items-center justify-content-center">
              <Icon.PersonLinesFill color="#FFFFFF" size={70} />
            </div>
          </div>
          <h4>Management</h4>
          <p>I manage the whole process from acquiring clients, project timeline, until product delivery.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-3">
          <div className="border-icons d-flex align-items-center justify-content-center mx-auto mb-3">
            <div className="background-icons d-flex align-items-center justify-content-center">
              <Icon.StarFill color="#FFFFFF" size={70} />
            </div>
          </div>
          <h4>Client’s Favourite</h4>
          <p>I’ve been working for 4 years, working directly with many clients and all I heard are positive reviews.</p>
        </div>
      </div>
    </div>
  );
}
