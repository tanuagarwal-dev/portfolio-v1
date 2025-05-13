// import Contact from "@/components/common/contacts";
import Header from "@/components/common/header";
import Landing from "@/components/v2/landing";
import About from '@/components/v2/about';
import Projects from "@/components/v2/projects";
import Touch from "@/components/v2/touch";
import Education from "@/components/v2/education";
import Skills from "@/components/v2/skills";

export default function Dashboard() {
    return(
<div className="w-full min-h-screen p-4 bg-black">
    <div className="lg:mx-40 md:mx-20 mx-4 my-20 border border-white/10 rounded-lg h-full  flex flex-col gap-4 text-white">
    <Header/>
    <Landing/>
    <About/>
    <Education/>
    <Projects/>
    <Skills/>
    <Touch/>
    
    </div>
    
</div>
    )
}