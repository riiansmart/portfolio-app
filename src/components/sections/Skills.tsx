import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const Skills = () => {
  const frontendSkills = ['Angular', 'Blazor', 'CSS', 'HTML', 'JavaScript', 'jQuery', 'Next.js', 'React', 'TailwindCSS', 'TypeScript'];
  const backendSkills = ['C', 'C#', 'Dapper','Entity', 'Express', 'Firebase', 'Java', 'JUnit', 'MongoDB', 'Node.js', 'PostgreSQL', 'Prisma', 'Python', 'REST APIs'];
  const otherSkills = ['AWS', 'Azure', 'Docker', 'Figma', 'Git', 'GitHub', 'Google Cloud', 'Heroku', 'Kleopatra', 'Postman', 'Vercel', 'Wireshark'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      {/* Frontend Card */}
      <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">⚛️</span>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Frontend</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">
            Building beautiful, responsive user interfaces with modern frameworks and best practices.
          </p>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Backend Card */}
      <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🔧</span>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Backend</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">
            Creating robust server-side applications, APIs, and database management systems.
          </p>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 hover:from-green-600 hover:to-blue-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Other Technologies Card */}
      <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">Other</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 flex-1">
            Development tools, cloud platforms, and workflow optimization technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills; 