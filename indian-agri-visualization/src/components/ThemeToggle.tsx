import { Button } from '@mantine/core';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button 
  onClick={toggleTheme}
  className="fixed bottom-4 right-4 z-50"
  color={isDark ? 'orange' : 'blue'}
>
  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
</Button>

  );
};