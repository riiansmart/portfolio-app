import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default HomePage; 