import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Hero = () => {
  return (
    <Card className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-black dark:border-white/20 rounded-3xl shadow-2xl w-full">
      <CardContent className="flex flex-col md:flex-row items-center md:items-stretch text-center md:text-left p-8">
        <div className="flex flex-col items-center md:items-start justify-center gap-4 md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 dark:border-black/20 pb-6 md:pb-0 md:pr-8">
          <Avatar className="h-24 w-24 mb-2 border-4 border-indigo-400/70 shadow-lg">
            <AvatarImage src="/avatar.jpg" alt="Rian Smart" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black dark:text-white mb-2 drop-shadow-lg">
            Hello! 👋 I'm Rian Smart.
          </h1>
          <div className="flex flex-col gap-2 mb-2">
            <span className="flex items-center gap-2 text-lg md:text-xl font-semibold text-black dark:text-white">
              <Briefcase className="size-5 md:size-6" aria-hidden="true" />
              Full-Stack Software Developer
            </span>
            <span className="flex items-center gap-2 text-base md:text-lg text-black dark:text-white">
              <MapPin className="size-5 md:size-6" aria-hidden="true" />
              Glendale, Arizona
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-tr from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white shadow-md"
              aria-label="Email Contact"
              tabIndex={0}
            >
              <a
                href="mailto:rismart1221@outlook.com"
                aria-label="Email Contact"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.location.href = 'mailto:rismart1221@outlook.com'; } }}
              >
                <Mail className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
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
                <SiLinkedin className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="sm"
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
                <SiGithub className="size-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-4 md:w-1/2 pt-6 md:pt-0 md:pl-8">
          <p className="text-base md:text-lg text-black dark:text-white font-medium">
            I am a 20 year old Software Developer. I have been programming for 3 years now. I create professional full stack web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-yellow-400 dark:via-pink-400 dark:to-indigo-400 text-white dark:text-black font-semibold shadow-lg border-none"
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
              size="sm"
              className="bg-gradient-to-r from-pink-500 to-indigo-500 dark:from-yellow-400 dark:to-pink-500 text-white dark:text-black font-semibold shadow-lg border-none"
            >
              <a
                href="#contact"
                tabIndex={0}
                aria-label="Contact Me"
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { window.location.href = '#contact'; } }}
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Hero; 