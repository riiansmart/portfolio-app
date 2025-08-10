import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Hero = () => {
  return (
    <section id="hero" className="w-full">
      <Card className="backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-black dark:border-white/20 rounded-3xl shadow-2xl w-full">
        <CardContent className="flex flex-col md:flex-row items-center md:items-stretch p-0 w-full text-center md:text-left">
          <div className="flex flex-col items-center md:items-start justify-center gap-4 p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-white/10 dark:border-black/20">
            <Avatar className="h-28 w-28 mb-2 border-4 border-indigo-400/70 shadow-lg transition-transform duration-300 hover:rotate-1 hover:scale-105 animate-float">
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
                variant="outline"
                aria-label="Email Contact"
                tabIndex={0}
                className="transition-transform duration-150 hover:-translate-y-0.5"
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
                variant="outline"
                aria-label="LinkedIn Profile"
                tabIndex={0}
                className="transition-transform duration-150 hover:-translate-y-0.5"
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
                variant="outline"
                aria-label="GitHub Profile"
                tabIndex={0}
                className="transition-transform duration-150 hover:-translate-y-0.5"
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
          <div className="flex flex-col justify-center items-center md:items-start gap-4 md:w-1/2 p-8">
            <p className="text-base md:text-lg text-black dark:text-white font-medium">
              I am a 21 year old Software Developer. I have been programming for 3 years now. I create professional full stack web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
              <Button asChild size="sm" variant="cta" className="relative overflow-hidden group">
                <a
                  href="/resume.pdf"
                  download="Michael_Smart_Resume.pdf"
                  tabIndex={0}
                  aria-label="Download Resume"
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      const link = document.createElement("a");
                      link.href = "/resume.pdf";
                      link.download = "Michael_Smart_Resume.pdf";
                      link.click();
                    }
                  }}
                >
                  Download Resume
                  {/* Shine overlay */}
                  <span className="pointer-events-none absolute inset-0 before:absolute before:inset-y-0 before:left-[-100%] before:w-1/3 before:bg-white/50 dark:before:bg-black/20 before:skew-x-[-20deg] before:transition-transform before:ease-out before:duration-150 group-hover:before:translate-x-[250%]" />
                </a>
              </Button>

              <Button asChild size="sm" variant="outline">
                <a
                  href="#contact"
                  tabIndex={0}
                  aria-label="Contact Me"
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.open("#contact", "_blank");
                    }
                  }}
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
        {/* Scroll Down indicator */}
        <div className="hidden md:flex w-full justify-center pb-4">
          <a
            href="#skills"
            aria-label="Scroll to Skills"
            className="text-black dark:text-white animate-bounce hover:scale-110 transition-transform duration-200"
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { document.getElementById('skills')?.scrollIntoView({behavior:'smooth'}); } }}
          >
            ↓
          </a>
        </div>
      </Card>
    </section>
  );
};

export default Hero; 