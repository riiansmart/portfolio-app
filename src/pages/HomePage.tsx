import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import Contact from '../components/sections/Contact';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Availability Buttons - Above Hero */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button 
              onClick={handleScrollToContact}
              className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 text-white dark:text-black font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-none"
              aria-label="Available for freelance - Contact me"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { handleScrollToContact(); } }}
            >
              💼 Available for freelance
            </Button>
            <Button 
              onClick={handleScrollToContact}
              className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400 text-white dark:text-black font-bold text-base px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-none"
              aria-label="Open to opportunities - Contact me"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { handleScrollToContact(); } }}
            >
              ✨ Open to opportunities
            </Button>
          </div>

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