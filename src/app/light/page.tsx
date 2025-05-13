// import Contact from "@/components/common/contacts";
import Header from "@/components/common/header";
import Landing from "@/components/light/landing";
import About from '@/components/light/about';
// import Projects from "@/components/light/projects";
// import Touch from "@/components/light/touch";
// import Education from "@/components/light/education";
// import Skills from "@/components/light/skills";

export default function LightDashboard() {
    return (
        <div className="w-full min-h-screen p-4 bg-gradient-to-b from-slate-50 to-white">
            <Header />
            <div className="lg:mx-auto max-w-7xl md:mx-20 mx-4 my-20 bg-white/70 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-xl h-full flex flex-col gap-8 border border-slate-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-slate-50/30 to-transparent blur-3xl -z-10"/>
                <Landing />
                <About />
                {/* <Education />
                <Projects />
                <Skills />
                <Touch /> */}
            </div>
        </div>
    )
} 