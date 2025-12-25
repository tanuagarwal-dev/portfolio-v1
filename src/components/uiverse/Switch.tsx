'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button.jsx';

const Switch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-transparent  dark:hover:bg-white transition text-black dark:text-white"
    >
      {mounted ? (theme === 'dark' ? '☀️' : '🌙') : '☀️'}
    </Button>
  );
};

export default Switch;
