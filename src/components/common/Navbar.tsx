// src/components/common/Navbar.tsx
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="
      bg-white dark:bg-black
      border border-black dark:border-white/20
      rounded-2xl
      mx-auto mt-6
      px-8 py-2
      w-fit
      flex items-center justify-center
      font-semibold
      z-50
      backdrop-blur-none
      shadow-lg
      sticky top-6
    ">
      <div className="flex items-center gap-8">
        {/* Left: Avatar/Logo */}
        <a href="#" className="flex items-center gap-2 group focus:outline-none" aria-label="Home" tabIndex={0}>
          <span className="hidden md:inline text-lg font-bold text-black dark:text-white">&lt;RS.Dev&gt;</span>
        </a>
        {/* Center: Nav Links */}
        <ul className="flex space-x-6">
          <li><a href="#skills" className="relative px-2 py-1 text-sm font-semibold tracking-wide text-black dark:text-white transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" tabIndex={0} aria-label="Navigate to Skills section">Skills</a></li>
          <li><a href="#projects" className="relative px-2 py-1 text-sm font-semibold tracking-wide text-black dark:text-white transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" tabIndex={0} aria-label="Navigate to Projects section">Projects</a></li>
          <li><a href="#contact" className="relative px-2 py-1 text-sm font-semibold tracking-wide text-black dark:text-white transition-colors duration-200 focus:outline-none after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" tabIndex={0} aria-label="Navigate to Contact section">Contact</a></li>
        </ul>
        {/* Right: Resume Button & Mobile Nav */}
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="hidden md:inline-flex text-black dark:text-white"
            tabIndex={0}
          >
            {theme === "dark" ? <Sun className="h-5 w-5 transform transition-transform duration-300 rotate-180" /> : <Moon className="h-5 w-5 transform transition-transform duration-300" />}
          </Button>
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden text-black dark:text-white"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white dark:bg-black border-r border-black/10 dark:border-white/10">
              <nav className="flex flex-col gap-6 mt-10">
                <a href="#skills" className="text-lg font-semibold text-black dark:text-white hover:text-indigo-400 transition-colors" tabIndex={0}>Skills</a>
                <a href="#projects" className="text-lg font-semibold text-black dark:text-white hover:text-indigo-400 transition-colors" tabIndex={0}>Projects</a>
                <a href="#contact" className="text-lg font-semibold text-black dark:text-white hover:text-indigo-400 transition-colors" tabIndex={0}>Contact</a>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  onClick={toggleTheme}
                  className="mt-4 text-black dark:text-white"
                  tabIndex={0}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5 transform transition-transform duration-300 rotate-180" /> : <Moon className="h-5 w-5 transform transition-transform duration-300" />}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 