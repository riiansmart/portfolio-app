import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const Skills = () => {
  const skills = [
    { name: 'React', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 2C15.866 2 19 5.134 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2Z" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Frontend' },
    { name: 'Next.js', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Frontend' },
    { name: 'TypeScript', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" /><path d="M8 12h8" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Language' },
    { name: 'TailwindCSS', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 15c1.5-2 3.5-3 6-3s4.5 1 6 3 3.5 3 6 3" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Frontend' },
    { name: 'HTML', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Language' },
    { name: 'CSS', icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2" /></svg>, category: 'Language' },
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white text-center mb-4 tracking-tight">
          Skills
        </h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-yellow-400 dark:to-pink-500 rounded-full mb-10"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-black dark:border-white/20 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="mb-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 dark:from-yellow-400 dark:to-pink-500 p-3 rounded-full shadow-md">
                  {skill.icon}
                </div>
                <span className="text-black dark:text-white font-semibold text-lg mt-2 mb-1">
                  {skill.name}
                </span>
                <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-pink-500 text-white dark:text-black mt-1">{skill.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 