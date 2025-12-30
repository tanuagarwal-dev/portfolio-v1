'use client';
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from 'next-themes';

export default function ThemesProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      defaultTheme="dark"
      enableSystem={false}
      attribute="class"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
