import { Button } from '@mantine/core';

interface ThemeToggleProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export const ThemeToggle = ({ toggleTheme, isDark }: ThemeToggleProps) => {
  return (
    <Button 
      onClick={toggleTheme}
      className="fixed border rounded-full p-2 cursor-pointer h-[40px] w-[40px] top-4 right-6 z-50"
      variant="outline"
      color={isDark ? 'gray' : 'dark'}
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  );
};