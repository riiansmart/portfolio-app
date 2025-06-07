import HomePage from './pages/HomePage';
import { ThemeProvider } from './components/common/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 text-gray-100 font-sans antialiased min-h-screen dark:bg-white dark:text-black">
        <HomePage />
      </div>
    </ThemeProvider>
  );
};

export default App;
