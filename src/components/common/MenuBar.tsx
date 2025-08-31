'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
import Link from 'next/link';
export const MenuBar = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="bg-transparent border-0 font-bold"
          >
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm h-screen flex flex-col justify-start gap-4">
            <DrawerHeader>
              <DrawerTitle>Tanu Agarwal</DrawerTitle>
              <DrawerDescription>Web Dev</DrawerDescription>
            </DrawerHeader>

            <div className="border p-4 capitalize m-2">
              <ul>
                <li>
                  <Link
                    href="#home"
                    className="hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-green-600 dark:hover:text-green-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <DrawerClose asChild>
              <Button variant="outline" className="text-red-600  font-bold m-4">
                Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
