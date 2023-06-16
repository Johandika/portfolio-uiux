import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Banner from "../components/Banner";
import HireMe from "../components/HireMe";
import Review from "../components/Review";
import Test from "../components/Test";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Skills />
      <Projects />
      <HireMe />
      <Review />
      <Banner />
      {/* <Test /> */}
    </MainLayout>
  );
}
