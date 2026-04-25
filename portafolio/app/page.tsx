import Image from "next/image";
import Header from "./Components/Header/Header";

import CV from "./Components/CV/CV";

export default function Home() {
  return (
    <>
      <Header />

      <CV />


      <a href="#home" className="scroll-top" id="scroll-top">
        <i className="fas fa-arrow-up"></i>
    </a>
    
    </>
  );
}