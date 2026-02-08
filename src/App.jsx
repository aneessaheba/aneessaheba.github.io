import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Stats />
      <Contact />
      <Chatbot />
      <BackToTop />
    </div>
  );
}

export default App;