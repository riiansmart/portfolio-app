// src/components/common/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center">
        <a
          href="#hero"
          className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          aria-label="Navigate to hero section"
          tabIndex={0}
        >
          <svg
            className="h-6 w-6 text-white"
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
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400" tabIndex={0} aria-label="Navigate to About section">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400" tabIndex={0} aria-label="Navigate to Projects section">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400" tabIndex={0} aria-label="Navigate to Skills section">Skills</a></li>
          </ul>
        </div>
        <div className="w-10 invisible"></div>
      </div>
    </nav>
  );
};

export default Navbar; 