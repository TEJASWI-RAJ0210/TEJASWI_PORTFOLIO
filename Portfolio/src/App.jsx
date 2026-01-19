import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BgVideo from "./assets/BgVideo.mp4";
//import { Contact } from "lucide-react";

export default function App() {
  return (
   <>
   
    <div className="min-h-screen overflow-x-hidden">
      
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
    </div>
   </>
  )
}