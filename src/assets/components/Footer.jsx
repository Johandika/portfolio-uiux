import React from "react";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid py-4">
        <div className="row text-center align-items-center">
          <div className="col-md-3 order-2 order-md-1 py-4 py-md-0">
            <a
              href="https://www.instagram.com/azonix_designer/"
              target="_blank"
              className="mx-2 mx-md-3">
              <Icon.Instagram color="#bfbfbf" size={25} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6282370323310&text=Hallo+Johandika%2C+I+visit+from+your+website&type=phone_number&app_absent=0"
              target="_blank"
              className="mx-2 mx-md-3">
              <Icon.Whatsapp color="#bfbfbf" size={25} />
            </a>
            <a href="https://github.com/Johandika" target="_blank" className="mx-2 mx-md-3 ">
              <Icon.Github color="#bfbfbf" size={25} />
            </a>
          </div>
          <div className="col-md-6 order-3 order-md-2">
            <small>&copy; 2021 Copyright AZONIX. All Rights Reserved.</small>
          </div>
          <div className="col-md-3 order-1 order-md-3">
            <a href="#">
              <img
                src={"/src/assets/images/logo.png"}
                alt="azonix logo"
                style={{ height: 40 }}></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
