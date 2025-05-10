import { ArrowDownRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { BackgroundLines } from "../ui/background-lines";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Landing() {
  return (
    <BackgroundLines className="w-full relative bg-black overflow-hidden px-4">
      <div
        className=" absolute top-1/2 my-4 h-3/4 w-1/4 -translate-y-1/2 opacity-10 z-0 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        style={{
          backgroundColor: "#000000",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          clipPath: "ellipse(100% 50% at 0% 50%)",
        }}
      />

      {/* Content behind/in front of it */}
      <div className="relative z-10 flex flex-col gap-0 items-center justify-center text-white">
        <div className="flex justify-center items-center flex-col py-16 px-4 ">
          <h1 className="lg:text-7xl text-white text-6xl font-extrabold">
            Tanu Agarwal,
          <br/>
            web developer
          </h1>
        </div>
        <div className="lg:w-1/2 text-lg font-semibold p-4 ">
          <p>
            Passionate about front-end development, I create modern web
            solutions that blend design and performances. Explore my world and
            discover my projects!
          </p>
        </div>
        <div className="flex gap-4 items-center mt-4">
            <HoverBorderGradient
            containerClassName="rounded-full "
            as="button"
            className="flex items-center">
                <ArrowDownRight />
                See my projects
                </HoverBorderGradient>
        
          <HoverBorderGradient
            containerClassName="rounded-full" as="button" className="flex items-center">
            <ArrowDownRight />
            More about me
          </HoverBorderGradient>
        </div>
        <div className="w-20 my-20 ">
          <Separator className="bg-gray-600" />
        </div>
      </div>

      <div className="absolute top-[-80px] right-[-60px] w-2/3 h-2/3 bg-radial from-green-300 via-green-500 to-green-800 rounded-full blur-3xl opacity-20 z-0 transform rotate-[-45deg]" />

      {/* <div className="absolute top-[-80px] left-0 transform -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-full blur-3xl opacity-30 z-0" /> */}
    </BackgroundLines>
  );
}
