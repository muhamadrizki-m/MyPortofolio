import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import ScrollAnimations from "./components/ui/ScrollAnimations.jsx";
import ScrollReveal from "./components/ui/ScrollReveal.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimations />
      <ScrollReveal />

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;