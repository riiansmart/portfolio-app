import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
// Icon imports
import { 
  SiAngular, SiBlazor, SiCss3, SiHtml5, SiJavascript, SiJquery, 
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,
  SiC, SiSharp, SiExpress, SiFirebase, SiMongodb, 
  SiNodedotjs, SiPostgresql, SiPrisma, SiPython,
  SiAmazon, SiDocker, SiFigma, SiGit, 
  SiGithub, SiGooglecloud, SiHeroku, SiPostman, SiVercel
} from "react-icons/si";
import { DiDatabase, DiJava } from "react-icons/di";
import { MdApi, MdSecurity, MdCloud } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";

const Skills = () => {
  const frontendSkills = [
    { name: 'Angular', icon: SiAngular },
    { name: 'Blazor', icon: SiBlazor },
    { name: 'CSS', icon: SiCss3 },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'jQuery', icon: SiJquery },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'TypeScript', icon: SiTypescript }
  ];

  const backendSkills = [
    { name: 'C', icon: SiC },
    { name: 'C#', icon: SiSharp },
    { name: 'Dapper', icon: DiDatabase },
    { name: 'Express', icon: SiExpress },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Java', icon: DiJava },
    { name: 'JUnit', icon: AiOutlineCode },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'Python', icon: SiPython },
    { name: 'REST APIs', icon: MdApi }
  ];

  const otherSkills = [
    { name: 'AWS', icon: SiAmazon },
    { name: 'Azure', icon: MdCloud },
    { name: 'Docker', icon: SiDocker },
    { name: 'Figma', icon: SiFigma },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Google Cloud', icon: SiGooglecloud },
    { name: 'Heroku', icon: SiHeroku },
    { name: 'Kleopatra', icon: MdSecurity },
    { name: 'Postman', icon: SiPostman },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Wireshark', icon: MdSecurity }
  ];

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
            {frontendSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-3 py-1 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 cursor-default flex items-center gap-1.5"
                >
                  <IconComponent className="size-3" />
                  {skill.name}
                </Badge>
              );
            })}
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
            {backendSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 hover:from-green-600 hover:to-blue-600 transition-all duration-200 cursor-default flex items-center gap-1.5"
                >
                  <IconComponent className="size-3" />
                  {skill.name}
                </Badge>
              );
            })}
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
            {otherSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 cursor-default flex items-center gap-1.5"
                >
                  <IconComponent className="size-3" />
                  {skill.name}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills; 