const Hero = () => {
  return (
    <section id="hero" className="bg-black py-20 h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 text-white">Rian Smart</h1>
        <p className="text-xl text-gray-300 mb-8">Software Developer.</p>
        <a
          href="#projects"
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          tabIndex={0}
          aria-label="View my projects"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero; 