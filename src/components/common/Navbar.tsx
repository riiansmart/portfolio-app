// src/components/common/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold" aria-label="Navigate to hero section">
          Rian Smart
        </a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" tabIndex={0} aria-label="Navigate to About section">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" tabIndex={0} aria-label="Navigate to Projects section">Projects</a></li>
          <li><a href="#skills" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" tabIndex={0} aria-label="Navigate to Skills section">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar; 