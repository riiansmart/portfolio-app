import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-black/60 dark:bg-white/80 border-t border-white/20 dark:border-black/20 shadow-inner mt-10 w-full">
      <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
        <div className="flex gap-4 mb-2">
          <Button asChild size="icon" variant="ghost" className="text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 dark:hover:from-yellow-400 dark:hover:to-pink-300">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          </Button>
          <Button asChild size="icon" variant="ghost" className="text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 dark:hover:from-yellow-400 dark:hover:to-pink-300">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          </Button>
          <Button asChild size="icon" variant="ghost" className="text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 dark:hover:from-yellow-400 dark:hover:to-pink-300">
            <a href="mailto:your@email.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </Button>
        </div>
        <p className="text-center text-base font-medium text-white/80 dark:text-black/70">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 dark:from-yellow-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent font-semibold">
            &copy; {new Date().getFullYear()} Rian Smart
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 