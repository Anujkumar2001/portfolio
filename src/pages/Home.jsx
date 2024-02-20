import React from "react";
import Herosection from "../components/Herosection";
import About from "../components/About";
import { Routes, Route } from "react-router-dom";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Herosection />
      <About />
      <Skills/>
      <Projects/>
      <Tools/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
