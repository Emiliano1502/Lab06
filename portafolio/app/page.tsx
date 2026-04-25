import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import CV from "./Components/CV/CV";
import InterestsSubjects from "./Components/InterestsSubjects/InterestsSubjects";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InterestsSubjects />
      <CV />
      <Projects />
      <Contact />
      <Footer />
      

      <a href="#home" className="scroll-top" id="scroll-top">
        <i className="fas fa-arrow-up"></i>
    </a>
    
    </>
  );
}