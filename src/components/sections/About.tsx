import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-indigo-950 dark:from-white dark:via-gray-100 dark:to-indigo-100">
      <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-3xl shadow-2xl max-w-3xl w-full">
        <CardContent className="flex flex-col md:flex-row items-center gap-8 p-10">
          <Avatar className="h-28 w-28 border-2 border-indigo-500/60 shadow-md">
            <AvatarImage src="/profile.jpg" alt="Rian Smart" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-2 tracking-tight">About Me</h2>
            <div className="w-16 h-1 mx-auto md:mx-0 bg-gradient-to-r from-indigo-400 to-pink-400 dark:from-yellow-400 dark:to-indigo-400 rounded-full mb-4"></div>
            <p className="text-lg text-white/90 dark:text-black/80 font-medium mb-4">
              I am a passionate front-end developer with a love for crafting visually stunning and highly interactive web applications. My focus is on delivering seamless user experiences using the latest technologies.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-indigo-400 text-white dark:text-black">React</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-indigo-400 text-white dark:text-black">Next.js</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-indigo-400 text-white dark:text-black">TypeScript</Badge>
              <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-yellow-400 dark:to-indigo-400 text-white dark:text-black">TailwindCSS</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default About; 