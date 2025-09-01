import Link from 'next/link';
import { MenuBar } from './MenuBar';
import Switch from '../uiverse/Switch';

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-2 md:py-4 lg:py-4 z-50  bg-white/30 dark:bg-black/30  backdrop-blur-md border-b border-gray-300/30 dark:border-white/10 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Logo */}
      <span className="text-lg font-semibold">TA.</span>

      {/* Links */}
      <span className="flex gap-6 items-center px-8 text-lg justify-between">
        <span className="hidden md:flex lg:flex gap-8 px-8">
          <Link
            href="#home"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/16BOnZXTWEGXh8z_HYiqctJ6_9jfopVFZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 dark:hover:text-green-400 transition"
          >
            Resume
          </Link>
        </span>

        {/* Mobile Menu */}
        <span className="lg:hidden md:hidden my-2">
          <MenuBar />
        </span>
        <span className="flex items-center gap-4">
          <Switch />
        </span>
      </span>

      <span className="text-sm bg-gray-200/60 dark:bg-white/10 rounded-md px-2 py-1">
        <span className="text-amber-500">&lt;Code/&gt;</span>|
        <span className="text-amber-700">&lt;Ship/&gt;</span>
      </span>
    </div>
  );
}
