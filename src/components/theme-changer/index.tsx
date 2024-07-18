import { useEffect } from 'react';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils'; // Assuming this is a utility for skeleton loading

const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  lightLogo,
  darkLogo,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  lightLogo: string;
  darkLogo: string;
}) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY_NAME) || 'light';
    setTheme(savedTheme);
    document.querySelector('html')?.setAttribute('data-theme', savedTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, newTheme);
    setTheme(newTheme);
  };

  const logoSrc = theme === 'light' ? lightLogo : darkLogo;
  const skeletonColor = theme === 'light' ? 'bg-gray-300' : 'bg-gray-700';

  if (loading) {
    return (
      <button
        disabled
        className="card overflow-visible shadow-lg compact bg-base-100 p-4 flex justify-between items-center"
      >
        <div className="flex items-center space-x-4">
          {skeleton({
            widthCls: 'w-8',
            heightCls: 'h-8',
            className: skeletonColor,
          })}
          <span className={`${skeletonColor} h-5 w-24 block`} />
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="card overflow-visible shadow-lg compact bg-base-100 p-4 flex justify-between items-center"
    >
      <div className="flex items-center space-x-4">
        <img src={logoSrc} alt="Logo" className="w-8 h-8" />
        <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </button>
  );
};

export default ThemeChanger;
