'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-white dark:bg-black dark:hover:bg-white transition text-black dark:text-white"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </Button>
  );
};

export default Switch;
