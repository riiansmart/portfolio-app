const Hero = () => {
  return (
    <section id="hero" className="bg-gray-100 py-20 h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-700 mb-8">I'm a passionate Software Developer.</p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
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