import Navbar from "./AllComponnent/Navbar/Navbar";
import Home from "./AllComponnent/home/Home";
import { useState, useEffect } from "react";
import Services from "./AllComponnent/services/Services";
import About from "./AllComponnent/about/About";
import Doctor from "./AllComponnent/doctor/Doctor";
import Maps from "./AllComponnent/timeHoraire/Maps";
import Form from "./AllComponnent/form/Form";
import Contact from "./AllComponnent/contact/Contact";
import Consultation from "./AllComponnent/consultation/Consultation";

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 50;
      setScrolling(!isTop);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = scrolling ? "#FAF8F0" : "white";

    return () => {
      document.body.style.backgroundColor = "#FAF8F0";
    };
  }, [scrolling]);

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Doctor />
      <Consultation />
      <Maps />
      <Form />
      <Contact />
    </>
  );
}

export default App;
