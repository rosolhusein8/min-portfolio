import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';


function Hem() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />

    </>
  );
}
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hem />} />
        {/* <Route path="/exempel" element={<Exempel />} /> */}
      </Routes>
    </BrowserRouter>
  );    
}

export default App;
