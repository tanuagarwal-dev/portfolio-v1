import { ArrowDownRight } from 'lucide-react';
import { BackgroundLines } from '../ui/background-lines';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import Link from 'next/link';

export default function Landing() {
  return (
    <BackgroundLines className="w-full relative dark:bg-black text-black text-center dark:text-white flex min-h-screen mb-12 overflow-x-hidden">
      <div
        className="absolute top-[-80px] right-[-60px] w-2/3 h-2/3 
  bg-radial from-green-300 via-green-500 to-green-800 rounded-full blur-3xl 
  opacity-10 dark:opacity-20 z-0 transform rotate-[-45deg]"
      />
      <div className="relative z-10 flex flex-col gap-0 items-center lg:justify-center md:justify-center  dark:text-white mt-4">
        <div className="flex justify-center items-center flex-col py-16 px-4 ">
          <h1 className="lg:text-7xl dark:text-white text-5xl font-extrabold ">
            Tanu Agarwal,
            <br />
            web developer
          </h1>
        </div>
        <div className="lg:w-1/2 text-lg font-semibold p-4 text-black/80 dark:text-gray-300">
          <p>
            Passionate about front-end development, I create modern web
            solutions that blend design and performances. Explore my world and
            discover my projects!
          </p>
        </div>
        <div className="flex gap-4 items-center mt-4 flex-wrap justify-center">
          <div className="bg-black w-fit rounded-full p-1">
            <Link href="#projects">
              <HoverBorderGradient
                containerClassName="rounded-full "
                as="button"
                className="flex items-center"
              >
                <ArrowDownRight />
                See my projects
              </HoverBorderGradient>
            </Link>
          </div>

          <div className="bg-black w-fit rounded-full p-1">
            <Link href="#about">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center"
              >
                <ArrowDownRight />
                More about me
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-[-80px] right-[-60px] w-2/3 h-2/3 bg-radial from-green-300 via-green-500 to-green-800 rounded-full blur-3xl opacity-20 z-0 transform rotate-[-45deg]" />
    </BackgroundLines>
  );
}
