import {HashRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


function Hem() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />

    </>
  );
}
 function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Hem />} />
        {/* <Route path="/exempel" element={<Exempel />} /> */}
      </Routes>
    </HashRouter>
  );    
}

export default App;
