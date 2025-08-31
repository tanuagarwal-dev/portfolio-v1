'use client';

import Header from '@/components/common/header';
import Landing from '@/components/v2/landing';
import About from '@/components/v2/about';
import Projects from '@/components/v2/projects';
import Touch from '@/components/v2/touch';
import Education from '@/components/v2/education';
import Skills from '@/components/v2/skills';
import TerminalComponent from '@/components/common/TerminalComponent';

export default function Home() {
  return (
    <div className="w-full min-h-screen p-4 dark:bg-black" id="home">
      <div className="lg:mx-40 md:mx-20 mx-4 my-20 dark:border-white/10 border border-slate-200 rounded-lg h-full  flex flex-col gap-4 text-white">
        <Header />
        <Landing />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Touch />
      </div>
    </div>
  );
}
