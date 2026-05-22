import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CareerDirection from './components/CareerDirection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DownloadCV from './components/DownloadCV';
import PersonalBranding from './components/PersonalBranding';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] antialiased selection:bg-[#d4a5a5] selection:text-[#5d3a3b]">
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <About />
        <CareerDirection />
        <Skills />
        <Experience />
        <Projects />
        <DownloadCV />
        <PersonalBranding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
