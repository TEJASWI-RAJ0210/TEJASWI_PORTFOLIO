import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
   <>
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
      
    </div>
   </>
  )
}