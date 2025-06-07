import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  // Placeholder for project data
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my work and skills.',
      tech: ['React', 'Next.js', 'TailwindCSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'E-commerce App',
      description: 'A modern e-commerce platform with seamless UX.',
      tech: ['React', 'Redux', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with markdown support.',
      tech: ['Next.js', 'TypeScript', 'Prisma'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-indigo-950 dark:from-white dark:via-gray-100 dark:to-indigo-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black text-center mb-4 tracking-tight">
          Projects
        </h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-yellow-400 dark:to-indigo-400 rounded-full mb-10"></div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Card key={project.title} className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-2xl shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Project image placeholder */}
                <div className="h-32 w-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 dark:from-yellow-400/20 dark:via-pink-400/20 dark:to-indigo-400/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white/60 dark:text-black/60 text-2xl font-bold">Image</span>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-black mb-2">{project.title}</h3>
                <p className="text-white/80 dark:text-black/80 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-indigo-400 text-white dark:text-black">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white dark:text-black hover:text-indigo-400 dark:hover:text-yellow-500 transition-colors"><Github className="h-5 w-5" /></a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-sm font-semibold text-indigo-300 dark:text-yellow-600 hover:text-pink-400 dark:hover:text-indigo-500 transition-colors">Live Demo</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 