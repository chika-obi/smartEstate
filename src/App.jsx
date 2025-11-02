import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Listings from "./components/Listings/Listings";
import Agents from "./components/Agents/Agents"

import Projects from "./components/Projects/Projects";
import Pricing from "./components/Pricing/Pricing"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Listings />
      <Agents/>
      <Pricing />
      <Projects />
      
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
