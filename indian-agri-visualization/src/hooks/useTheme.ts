import { useState } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return { isDark, toggleTheme };
};