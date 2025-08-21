import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import "./data/projects"; // Ensure projects data is imported
import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;