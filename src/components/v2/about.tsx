'use client';
import Typewriter from 'typewriter-effect';
import React from 'react';
import AboutMe from '../common/aboutMe';
import Image from 'next/image';
import avatar from '../../../public/images/me2.jpg';
export default function Details() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section
      className="relative min-h-screen px-8 w-full lg:text-justify text-left py-12 flex flex-col lg:flex-row items-center justify-center gap-4 mb-10 overflow-hidden"
      id="about"
    >
      {/* Grid Shape */}
      <div className="absolute top-1/2 my-4 left-0 h-100 w-40 -translate-y-1/2 dark:opacity-10 opacity-5 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] details-grid-shape" />

      {/* Teal Blob */}
      <div className="details-teal-blob" />

      <div className=" relative z-10 w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
        <Image
          src={avatar}
          alt="Avatar"
          sizes="(max-width: 1024px) 60vw, 240px"
          className="w-60 h-60 rounded-full mb-4 p-1 bg-amber-200/70"
        />
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          Hi, I&apos;m <span className="text-emerald-600">Tanu</span>.
        </h1>
        <h2 className="flex flex-wrap font-bold text-gray-700 dark:text-gray-300 mb-4 text-3xl lg:text-4xl">
          I am a&nbsp;
          <span className="text-emerald-600" suppressHydrationWarning>
            {mounted ? (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Full Stack Developer.')
                    .pauseFor(150)
                    .deleteAll()
                    .typeString('Software Engineer.')
                    .pauseFor(150)
                    .deleteAll()
                    .typeString('CSE Student.')
                    .pauseFor(150)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                  delay: 40,
                  deleteSpeed: 30,
                }}
              />
            ) : (
              'Full Stack Developer.'
            )}
          </span>
        </h2>
      </div>
      <AboutMe />
    </section>
  );
}
