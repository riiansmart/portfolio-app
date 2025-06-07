const Projects = () => {
  // Placeholder for project data
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my work and skills.',
      tech: ['React', 'Next.js', 'TailwindCSS'],
      link: '#',
    },
    {
      title: 'E-commerce App',
      description: 'A modern e-commerce platform with seamless UX.',
      tech: ['React', 'Redux', 'Stripe'],
      link: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support.',
      tech: ['Next.js', 'TypeScript', 'Prisma'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-indigo-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Projects
        </h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-pink-400 rounded-full mb-10"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              className="group block backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 