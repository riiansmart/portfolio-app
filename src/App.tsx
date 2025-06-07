import HomePage from './pages/HomePage';
import { ThemeProvider } from './components/common/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <div className="
        bg-background
        bg-[image:radial-gradient(theme(colors.zinc.400)_1.1px,transparent_1.1px),radial-gradient(theme(colors.zinc.400)_1.1px,theme(colors.background)_1.1px)]
        bg-[size:44px_44px]
        bg-[position:0_0,22px_22px]
        font-sans
        antialiased
        min-h-screen
        text-gray-100
        dark:bg-[image:radial-gradient(theme(colors.zinc.700)_1.1px,transparent_1.1px),radial-gradient(theme(colors.zinc.700)_1.1px,theme(colors.background)_1.1px)]
        dark:text-white
      ">
        <HomePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
