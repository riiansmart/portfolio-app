import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-950 py-16 px-4">
      <Card className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl max-w-2xl w-full flex flex-col items-center text-center">
        <CardContent className="flex flex-col items-center p-10">
          <Avatar className="h-24 w-24 mb-6 border-2 border-indigo-500/60 shadow-md">
            <AvatarImage src="/profile.jpg" alt="Rian Smart" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Hi, I'm Rian
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
            I build beautiful, modern web experiences with React, Next.js, and TailwindCSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button asChild className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg border-none">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" tabIndex={0} aria-label="Download Resume">Download Resume</a>
            </Button>
            <Button asChild variant="secondary" className="border-none">
              <a href="#about" tabIndex={0} aria-label="Contact Me">Contact Me</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero; 