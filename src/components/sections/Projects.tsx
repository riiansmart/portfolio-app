const Projects = () => {
  // Placeholder for project data
  const projects = [
    { id: 1, title: "TaskFlow", description: "A full-stack task management web app built with React (Vite) and Spring Boot. Features JWT authentication, role-based access, and full CRUD task operations with a clean, responsive UI.", tech: ["Java Spring Boot", "React","PostgreSQL"] },
    { id: 2, title: "CineScope", description: "CineScope is a responsive movie review platform built with C# ASP.NET Core Blazor and MongoDB, allowing users to browse, review, and engage with films and community content.", tech: ["C#", "Blazor","MongoDB", "Microsoft Azure"] },
    { id: 3, title: "CardMaxxing", description: "A cloud-hosted e-commerce platform for browsing and purchasing graphics cards, built with ASP.NET MVC and deployed on Microsoft Azure", tech: ["C#", "ASP.NET", "MySQL", "Microsoft Azure"] },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techName, index) => (
                  <span key={index} className="bg-gray-800 text-gray-200 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-gray-700">
                    {techName}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="mt-auto bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg border border-gray-700 shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-center"
                tabIndex={0}
                aria-label={`View ${project.title} project`}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 