// src/components/common/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center py-2 px-4">
        <a
          href="#hero"
          className="group p-2 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Navigate to hero section"
          tabIndex={0}
        >
          <svg
            className="h-7 w-7 text-white drop-shadow group-hover:rotate-6 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L22 12L12 22L2 12L12 2Z" />
          </svg>
        </a>
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-2 md:space-x-6">
            <li>
              <a
                href="#about"
                className="relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:shadow-lg overflow-hidden"
                tabIndex={0}
                aria-label="Navigate to About section"
              >
                <span className="relative z-10">About</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:shadow-lg overflow-hidden"
                tabIndex={0}
                aria-label="Navigate to Projects section"
              >
                <span className="relative z-10">Projects</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 hover:text-white hover:shadow-lg overflow-hidden"
                tabIndex={0}
                aria-label="Navigate to Skills section"
              >
                <span className="relative z-10">Skills</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-10 invisible"></div>
      </div>
    </nav>
  );
};

export default Navbar; 