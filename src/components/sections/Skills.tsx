const Skills = () => {
  const skillsList = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "HTML5", "CSS3", "TailwindCSS", "Node.js", 
    "Git & GitHub", "REST APIs", "Problem Solving"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillsList.map((skill, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-md text-center text-gray-700 font-medium shadow-sm hover:bg-gray-200 transition-colors duration-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills; 