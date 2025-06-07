import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-black/60 dark:bg-white/80 border-t border-white/20 dark:border-black/20 shadow-inner mt-10 w-full">
      <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center gap-4">
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