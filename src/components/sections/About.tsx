const About = () => {
  return (
    <section id="about" className="py-16 px-4 flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-indigo-950">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          About Me
        </h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mb-6"></div>
        <p className="text-lg text-white/90 font-medium">
          I am a passionate front-end developer with a love for crafting visually stunning and highly interactive web applications. My focus is on delivering seamless user experiences using the latest technologies.
        </p>
      </div>
    </section>
  );
};

export default About; 