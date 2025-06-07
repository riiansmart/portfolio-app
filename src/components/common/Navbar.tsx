// src/components/common/Navbar.tsx
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="backdrop-blur-md bg-black/60 dark:bg-white/80 border-b border-white/10 dark:border-black/20 shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Left: Avatar/Logo */}
        <a href="#hero" className="flex items-center gap-2 group focus:outline-none" aria-label="Home" tabIndex={0}>
          <Avatar className="h-10 w-10 border-2 border-indigo-500/60 shadow-md">
            <AvatarImage src="/profile.jpg" alt="Rian Smart" />
            <AvatarFallback className="text-black dark:text-white">RS</AvatarFallback>
          </Avatar>
          <span className="hidden md:inline text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rian Smart</span>
        </a>
        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-2 md:space-x-6">
          <li><a href="#about" className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white dark:hover:text-white hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-400" tabIndex={0} aria-label="Navigate to About section">About</a></li>
          <li><a href="#projects" className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white dark:hover:text-white hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-400" tabIndex={0} aria-label="Navigate to Projects section">Projects</a></li>
          <li><a href="#skills" className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white dark:text-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white dark:hover:text-white hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-yellow-400" tabIndex={0} aria-label="Navigate to Skills section">Skills</a></li>
        </ul>
        {/* Right: Resume Button & Mobile Nav */}
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="hidden md:inline-flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            tabIndex={0}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden text-white"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-black/90 border-r border-white/10">
              <nav className="flex flex-col gap-6 mt-10">
                <a href="#about" className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors" tabIndex={0}>About</a>
                <a href="#projects" className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors" tabIndex={0}>Projects</a>
                <a href="#skills" className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors" tabIndex={0}>Skills</a>
                <Button
                  size="icon"
                  variant="secondary"
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  onClick={toggleTheme}
                  className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  tabIndex={0}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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