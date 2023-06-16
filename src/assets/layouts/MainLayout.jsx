import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props) {
  return (
    <React.Fragment>
      <Navbar />
      <main
        style={{
          // width: "100%",
          minHeight: "90vh",
          // maxWidth: 900,
          margin: "0 auto",
          // paddingTop: 30,
        }}>
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
