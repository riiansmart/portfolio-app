import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MapPin, Briefcase, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[70vh] flex items-center justify-center bg-transparent py-16 px-4"
    >
      <Card className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-black dark:border-white/20 rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left">
        <CardContent className="flex flex-col items-center md:items-start justify-center gap-4 p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 dark:border-black/20">
          <Avatar className="h-28 w-28 mb-2 border-4 border-indigo-400/70 shadow-lg">
            <AvatarImage src="/profile.jpg" alt="Rian Smart" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-1 drop-shadow-lg">
            Rian Smart
          </h1>
          <div className="flex flex-col gap-1 mb-1">
            <span className="flex items-center gap-2 text-base font-semibold text-black dark:text-white">
              <Briefcase className="size-5" aria-hidden="true" />
              Full-stack Software Developer
            </span>
            <span className="flex items-center gap-2 text-sm text-black dark:text-white">
              <MapPin className="size-5" aria-hidden="true" />
              Glendale, Arizona, US
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <Button
              asChild
              size="icon"
              className="bg-gradient-to-tr from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md"
              aria-label="LinkedIn Profile"
              tabIndex={0}
            >
              <a
                href="https://www.linkedin.com/in/michael-smart-47576a264/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.open('https://www.linkedin.com/in/michael-smart-47576a264/', '_blank'); } }}
              >
                <Linkedin className="size-5" />
              </a>
            </Button>
            <Button
              asChild
              size="icon"
              className="bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-black hover:to-gray-700 text-white shadow-md"
              aria-label="GitHub Profile"
              tabIndex={0}
            >
              <a
                href="https://github.com/riiansmart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.open('https://github.com/riiansmart', '_blank'); } }}
              >
                <Github className="size-5" />
              </a>
            </Button>
          </div>
        </CardContent>
        <CardContent className="flex flex-col justify-center items-center md:items-start gap-6 p-8 md:w-1/2">
          <p className="text-base md:text-lg text-black dark:text-white font-medium max-w-xl">
            I am a 20 year old Software Developer. I have been programming for 3 years now. I create professional full stack web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-yellow-400 dark:via-pink-400 dark:to-indigo-400 text-white dark:text-black font-semibold shadow-lg border-none w-full sm:w-auto"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                aria-label="Download Resume"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.open('/resume.pdf', '_blank'); } }}
              >
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-indigo-500 dark:from-yellow-400 dark:to-pink-500 text-white dark:text-black font-semibold shadow-lg border-none w-full sm:w-auto"
            >
              <a
                href="#about"
                tabIndex={0}
                aria-label="Contact Me"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.location.href = '#about'; } }}
              >
                Contact Me
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Hero; 