const Footer = () => {
  return (
    <footer className="
      bg-transparent
      border border-black dark:border-white/20
      rounded-2xl
      mx-auto mb-6
      px-8 py-2
      w-fit
      flex items-center justify-center
      font-semibold
      backdrop-blur-none
      shadow-none
    ">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center text-base font-medium text-black dark:text-white">
          <span className="hidden md:inline text-md font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">&copy; {new Date().getFullYear()} Rian Smart</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 