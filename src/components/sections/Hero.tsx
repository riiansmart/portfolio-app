const Hero = () => {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-950 py-16 px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
          Hi, I'm Rian
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
          I build beautiful, modern web experiences with React, Next.js, and TailwindCSS.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          tabIndex={0}
          aria-label="View my projects"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero; 