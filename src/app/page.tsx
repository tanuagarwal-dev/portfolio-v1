"use client"
import Archive from "@/components/common/archive";
import Contact from "@/components/common/contacts";
import Header from "@/components/common/header";
import Hero from "@/components/common/hero";
import Intro from "@/components/common/intro";


export default function Home() {
  return (
    <div className="bg-radial from-[#d7ccbb] via-[#deb7a4] to-[#e9d5c7] text-black flex flex-col items-center justify-center lg:mx-40 md:mx-20 mx-4 my-20 border border-white/10 rounded-lg h-full">
    <Header/>
  <Hero/>
  <Intro/>
  <Archive/>
  <Contact/>
</div>
  );
}
