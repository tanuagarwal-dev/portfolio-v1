"use client"
import { ArrowDownRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="w-full relative overflow-hidden px-4">
      {/* Subtle pattern overlay */}
      <div
        className="absolute top-1/2 right-0 h-3/4 w-1/3 -translate-y-1/2 opacity-5 z-0"
        style={{
          backgroundColor: "#f8fafc",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23475569' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          clipPath: "ellipse(100% 50% at 100% 50%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col gap-0 items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center flex-col py-16 px-4">
          <h1 className="lg:text-7xl text-6xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-700 bg-clip-text text-transparent">
            Tanu Agarwal,
            <br/>
            web developer
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2 text-lg font-medium p-4 text-slate-600">
          <p>
            Passionate about front-end development, I create modern web
            solutions that blend design and performances. Explore my world and
            discover my projects!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 items-center mt-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-300 shadow-sm">
            <ArrowDownRight className="w-5 h-5" />
            See my projects
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-slate-700">
            <ArrowDownRight className="w-5 h-5" />
            More about me
          </button>
        </motion.div>

        <div className="w-20 my-20">
          <Separator className="bg-slate-200" />
        </div>
      </div>

      {/* Subtle gradient background */}
      <div className="absolute top-[-80px] right-[-60px] w-2/3 h-2/3 bg-gradient-to-r from-blue-50 via-slate-50 to-slate-100 rounded-full blur-3xl opacity-50 z-0 transform rotate-[-45deg]" />
      <div className="absolute bottom-[-120px] left-[-60px] w-1/2 h-1/2 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 rounded-full blur-3xl opacity-30 z-0" />
    </div>
  );
} 