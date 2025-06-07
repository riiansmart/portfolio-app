const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-black/60 border-t border-white/20 shadow-inner mt-10 w-full">
      <div className="max-w-4xl mx-auto py-8 px-4 flex flex-col items-center">
        <p className="text-center text-base font-medium text-white/80">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            &copy; {new Date().getFullYear()} Rian Smart
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 