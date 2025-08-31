'use client';
// import Image from 'next/image';
import Card from '../uiverse/CardV2';
import { card } from '@/lib/data';

export default function Skills() {
  return (
    <div
      className="w-full p-4 my-10 py-10 relative overflow-clip skills-bg"
      id="skills"
    >
      <h1 className="lg:text-6xl md:text-6xl text-5xl text-gray-700 ml-4 font-semibold dark:text-gray-400">
        Skills.
      </h1>
      <h3 className="text-lg mb-8 mt-4 ml-4 text-gray-700 dark:text-gray-500 font-semibold">
        Skills I have acquired over the years.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
        {card.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-center items-center w-full h-full p-4"
          >
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
