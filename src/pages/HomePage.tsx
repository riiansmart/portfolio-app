import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Availability Buttons removed to keep focus on primary call-to-action */}

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hero Section - Full Width */}
            <div className="lg:col-span-12">
              <Hero />
            </div>
            
            {/* Skills Section */}
            <div id="skills" className="lg:col-span-12">
              <Skills />
            </div>
            
            {/* Projects - Full Width */}
            <div id="projects" className="lg:col-span-12">
              <Projects />
            </div>
            
            {/* Contact Section - Full Width at Bottom */}
            <div id="contact" className="lg:col-span-12">
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage; 