import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import { TiltCard } from "../common/TiltCard";

const Projects = () => {
  // Updated project data for coding projects showcase
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with cutting-edge technologies to showcase my development skills and projects.',
      features: [
        'Dark/Light mode toggle with smooth transitions',
        'Responsive design optimized for all devices',
        'Modern UI with Tailwind CSS, ShadCN, and custom animations',
        'TypeScript for enhanced type safety'
      ],
      tech: ['React', 'CSS', 'TypeScript', 'TailwindCSS', 'ShadCN'],
      github: 'https://github.com/riiansmart/portfolio-app',
      demo: '#',
      status: 'Live'
    },
    {
      title: 'TaskFlow',
      description: 'A full-stack task management web app built with React (Vite) and Spring Boot. Features JWT authentication, role-based access, and full CRUD task operations with a clean, responsive UI.',
      features: [
        'JWT-based user authentication and role-based access control',
        'Advanced task filtering and sorting by status, priority, and due date',
        'Responsive UI with dark/light theme support',
        'Real-time task status updates and bulk operations'
      ],
      tech: ['React', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Prisma', 'JWT'],
      github: 'https://github.com/riiansmart/taskflow_app',
      demo: '#',
      status: 'In Development'
    },
    {
      title: 'CineScope',
      description: 'A modern, user-friendly movie review platform that enables movie enthusiasts to share their opinions and discover new films. Built using C# ASP.NET Core Blazor with MongoDB.',
      features: [
        'User authentication with secure login/registration system',
        'Movie browsing by category, rating, and release date',
        'Review management with full CRUD operations',
        'Admin dashboard with content moderation tools'
      ],
      tech: ['C#', 'ASP.NET Core', 'Blazor', 'MongoDB', 'HTML', 'CSS'],
      github: 'https://github.com/omniV1/CineScope',
      demo: '#',
      status: 'Completed'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/30';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg">
      <CardContent className="p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md bg-black text-white dark:bg-white dark:text-black">
            <Code className="w-4 h-4 text-current" />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white">Featured Projects</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <TiltCard>
                <Card className="h-full bg-white/5 dark:bg-black/5 border border-black dark:border-white/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-white/10 dark:hover:bg-black/10 hover:border-orange-500/50">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                          {project.title}
                        </h3>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Project Features */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-sm font-medium text-black dark:text-white mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-gray-100 dark:bg-secondary text-gray-700 dark:text-secondary-foreground text-xs px-2 py-1 border border-gray-200 dark:border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-black dark:border-white/20">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`View ${project.title} on GitHub`}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`View ${project.title} live demo`}
                        className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects; 