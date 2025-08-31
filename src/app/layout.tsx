import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Space_Grotesk,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Tanu Agarwal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${grotesk.variable} ${montserrat.variable} ${jetbrains.variable} antialiased`}
      >
        {/* <ThemesProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          enableColorScheme
          disableTransitionOnChange>
{/* bg-[#ddc4b8] */}
        {/* {children}
          </ThemesProvider> */}

        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
