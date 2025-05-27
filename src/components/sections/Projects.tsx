const Projects = () => {
  // Placeholder for project data
  const projects = [
    { id: 1, title: "Project Alpha", description: "A cool project about X.", tech: ["React", "Node.js"] },
    { id: 2, title: "Project Beta", description: "An innovative solution for Y.", tech: ["Python", "Django"] },
    { id: 3, title: "Project Gamma", description: "A mobile app for Z.", tech: ["React Native", "Firebase"] },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techName, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {techName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 