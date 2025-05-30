const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Hello! I'm a new software developer eager to build amazing and impactful applications.
            I have a strong foundation in web development technologies and a passion for learning and problem-solving.
            Currently exploring opportunities to contribute my skills to innovative projects.
          </p>
          <a
            href="#contact"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-gray-700 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            tabIndex={0}
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 