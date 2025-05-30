const Skills = () => {
  const skillsList = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "HTML5", "CSS3", "TailwindCSS", "Node.js", 
    "Git & GitHub", "REST APIs", "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 flex flex-col items-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            {skillsList.map((skill, index) => (
              <li key={index} className="bg-gray-800 p-3 rounded-md text-center text-gray-200 font-medium shadow-sm border border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                {skill}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg border border-gray-700 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            tabIndex={0}
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills; 